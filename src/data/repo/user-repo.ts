import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { Image, Passion, User } from "@prisma/client";

export type UserWithImagesAndPassions = User & {
  images: Image[];
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
}
