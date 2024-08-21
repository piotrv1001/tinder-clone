import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Like } from "@prisma/client";

export type NewLike = Omit<Like, "id" | "createdAt" | "updatedAt">;

export class LikeRepo {
  static async createLike(newLike: NewLike): Promise<ServerResponse<Like>> {
    try {
      const like = await db.like.create({
        data: newLike,
      });
      return { status: "success", data: like };
    } catch {
      return { status: "error", message: "Failed to create like" };
    }
  }
  static async getLikeBySenderIdAndReceiverId({
    senderId,
    receiverId,
  }: {
    senderId: string;
    receiverId: string;
  }): Promise<ServerResponse<Like | null>> {
    try {
      const like = await db.like.findFirst({
        where: {
          senderId,
          receiverId,
        },
      });
      return { status: "success", data: like };
    } catch {
      return {
        status: "error",
        message: "Failed to get like by sender and receiver id",
      };
    }
  }
  static async deleteLike(id: string): Promise<ServerResponse<Like>> {
    try {
      const like = await db.like.delete({
        where: {
          id,
        },
      });
      return { status: "success", data: like };
    } catch {
      return { status: "error", message: "Failed to delete like" };
    }
  }
}
