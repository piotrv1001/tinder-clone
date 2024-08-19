"use server";

import { PartialUser, UserRepo } from "@/data/repo/user-repo";
import { ServerResponse } from "@/types/server-response";
import { User } from "@prisma/client";

export const updateUserAction = async (
  partialUser: PartialUser
): Promise<ServerResponse<User>> => {
  try {
    const userId = partialUser.id;
    if(!userId) return { status: "error", message: "User id is required" };

    return await UserRepo.updateUser(userId, partialUser);
  } catch {
    return { status: "error", message: "Failed to update user" };
  }
};
