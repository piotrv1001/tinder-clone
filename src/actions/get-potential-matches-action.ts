"use server";

import { UserRepo, UserWithImages } from "@/data/repo/user-repo";
import { getCurrentUser } from "@/lib/utils";
import { ServerResponse } from "@/types/server-response";

export const getPotentialMatchesAction = async (
  page: number
): Promise<ServerResponse<UserWithImages[]>> => {
  try {
    const user = await getCurrentUser();
    if (!user?.id) return { status: "error", message: "Unauthorized" };

    const matchesRes = await UserRepo.getPotentialMatches({
      userId: user.id,
      page,
    });
    if (matchesRes.status === "error") return matchesRes;

    return { status: "success", data: matchesRes.data };
  } catch {
    return { status: "error", message: "Failed to get potential matches" };
  }
};
