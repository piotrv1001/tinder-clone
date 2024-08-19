import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Passion } from "@prisma/client";

export type NewPassion = Omit<Passion, "id" | "createdAt" | "updatedAt">;

export class PassionRepo {
  static async createPassion(
    newPassion: NewPassion
  ): Promise<ServerResponse<Passion>> {
    try {
      const passion = await db.passion.create({
        data: newPassion,
      });
      return { status: "success", data: passion };
    } catch {
      return { status: "error", message: "Failed to create passion" };
    }
  }
}
