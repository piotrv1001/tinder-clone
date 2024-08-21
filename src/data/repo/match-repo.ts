import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Match } from "@prisma/client";

export type NewMatch = Omit<Match, "id" | "createdAt" | "updatedAt">;

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
}
