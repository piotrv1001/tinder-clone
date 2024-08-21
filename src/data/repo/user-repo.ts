import { DEFAULT_MATCH_PAGE_SIZE } from "@/constants";
import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Image, Passion, User } from "@prisma/client";

export type UserWithImages = User & {
  images: Image[];
};
export type UserWithImagesAndPassions = UserWithImages & {
  passions: Passion[];
};
export type PartialUser = Partial<User>;

export class UserRepo {
  static async getUserById(id: string): Promise<ServerResponse<User | null>> {
    try {
      const user = await db.user.findUnique({
        where: {
          id,
        },
      });
      return { status: "success", data: user };
    } catch {
      return { status: "error", message: "Failed to get user by id" };
    }
  }
  static async updateUser(
    id: string,
    partialUser: PartialUser
  ): Promise<ServerResponse<User>> {
    try {
      const user = await db.user.update({
        where: {
          id: partialUser.id,
        },
        data: partialUser,
      });
      return { status: "success", data: user };
    } catch {
      return { status: "error", message: "Failed to update user" };
    }
  }
  static async getUserWithImagesById(
    id: string
  ): Promise<ServerResponse<UserWithImagesAndPassions | null>> {
    try {
      const user = await db.user.findUnique({
        where: {
          id,
        },
        include: {
          images: true,
          passions: true,
        },
      });
      return { status: "success", data: user };
    } catch {
      return { status: "error", message: "Failed to get user by id" };
    }
  }
  static async getPotentialMatches({
    userId,
    page ,
    pageSize = DEFAULT_MATCH_PAGE_SIZE,
  }: {
    userId: string;
    page: number;
    pageSize?: number;
  }): Promise<ServerResponse<UserWithImages[]>> {
    try {
      const potentialMatches = await db.user.findMany({
        where: {
          id: {
            not: userId, // Exclude the current user
          },
          AND: [
            {
              // Exclude users that the current user has already liked
              likesReceived: {
                none: {
                  senderId: userId,
                },
              },
            },
            {
              // Exclude users that the current user has already rejected and the rejection hasn't expired
              rejectionsReceived: {
                none: {
                  senderId: userId,
                  expiresAt: {
                    gt: new Date(),
                  },
                },
              },
            },
            // Exclude users that the current user has already matched with
            {
              matches: {
                none: {
                  targetId: userId,
                },
              },
            },
            {
              matchedBy: {
                none: {
                  initiatorId: userId,
                },
              },
            },
          ],
        },
        include: {
          images: true,
        },
        take: pageSize,
        skip: (page - 1) * pageSize,
      });
      return { status: "success", data: potentialMatches };
    } catch {
      return { status: "error", message: "Failed to get potential matches" };
    }
  }
}
