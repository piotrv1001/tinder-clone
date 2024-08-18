import { db } from "@/lib/db";
import { ServerResponse } from "@/types/server-response";
import { User } from "@prisma/client";

export class UserRepo {
  static async updateUser(
    id: string,
    data: Partial<User>
  ): Promise<ServerResponse<User>> {
    try {
      const user = await db.user.update({
        where: {
          id,
        },
        data,
      });
      return { status: "success", data: user };
    } catch {
      return { status: "error", message: "Failed to update user" };
    }
  }
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
}
