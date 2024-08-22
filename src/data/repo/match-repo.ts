import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Image, Match, Message, User } from "@prisma/client";
import { UserWithImagesAndPassions } from "./user-repo";

export type NewMatch = Omit<Match, "id" | "createdAt" | "updatedAt">;
export type MatchWithMessage = Match & {
  lastMessage: Message | null;
  match: User & { primaryImage: Image | null };
};
export type MatchWithMessages = Match & {
  messages: Message[];
  match: UserWithImagesAndPassions;
};

export class MatchRepo {
  static async createMatch(newMatch: NewMatch): Promise<ServerResponse<Match>> {
    try {
      const match = await db.match.create({
        data: newMatch,
      });
      return { status: "success", data: match };
    } catch {
      return { status: "error", message: "Failed to create match" };
    }
  }
  static async getMatchesByUserIdWithLastMessage(
    userId: string
  ): Promise<ServerResponse<MatchWithMessage[]>> {
    try {
      const matches = await db.match.findMany({
        where: {
          OR: [
            {
              initiatorId: userId,
            },
            {
              targetId: userId,
            },
          ],
        },
        include: {
          messages: {
            orderBy: {
              createdAt: "desc",
            },
            take: 1,
          },
          target: {
            include: {
              images: {
                take: 1,
                orderBy: {
                  createdAt: "asc",
                },
              },
            },
          },
          initiator: {
            include: {
              images: {
                take: 1,
                orderBy: {
                  createdAt: "asc",
                },
              },
            },
          },
        },
      });
      return {
        status: "success",
        data: matches.map((match) => {
          const { messages, ...rest } = match;
          const { images, ...user } =
            match.initiatorId === userId ? match.target : match.initiator;
          const matchedUser = {
            ...user,
            primaryImage: images.length > 0 ? images[0] : null,
          };
          return {
            ...rest,
            lastMessage: match.messages.length > 0 ? match.messages[0] : null,
            match: matchedUser,
          };
        }),
      };
    } catch {
      return { status: "error", message: "Failed to get matches" };
    }
  }
  static async getMatchByUserIdWithMessages({
    matchId,
    userId,
  }: {
    matchId: string;
    userId: string;
  }): Promise<ServerResponse<MatchWithMessages | null>> {
    try {
      const match = await db.match.findUnique({
        where: {
          id: matchId,
        },
        include: {
          messages: {
            orderBy: {
              createdAt: "asc",
            },
          },
          target: {
            include: {
              images: {
                orderBy: {
                  createdAt: "asc",
                },
              },
              passions: true,
            },
          },
          initiator: {
            include: {
              images: {
                orderBy: {
                  createdAt: "asc",
                },
              },
              passions: true,
            },
          },
        },
      });
      if (!match) return { status: "error", message: "Match not found" };

      const user =
        match.initiatorId === userId ? match.target : match.initiator;
      return { status: "success", data: { ...match, match: user } };
    } catch {
      return { status: "error", message: "Failed to get match" };
    }
  }
}
