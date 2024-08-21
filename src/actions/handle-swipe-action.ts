"use server";

import { LikeRepo } from "@/data/repo/like-repo";
import { MatchRepo } from "@/data/repo/match-repo";
import { RejectionRepo } from "@/data/repo/rejection-repo";
import { getCurrentUser } from "@/lib/utils";
import { ServerResponse } from "@/types/server-response";

type SwipeResponse = {
  isMatch: boolean;
};

export const handleSwipeAction = async (
  matchId: string,
  action: "like" | "rejection"
): Promise<ServerResponse<SwipeResponse>> => {
  try {
    const user = await getCurrentUser();
    if (!user?.id) return { status: "error", message: "Unauthorized" };

    switch (action) {
      case "like": {
        const existingLikeRes = await LikeRepo.getLikeBySenderIdAndReceiverId({
          senderId: matchId,
          receiverId: user.id,
        });
        if (existingLikeRes.status === "error") return existingLikeRes;

        if (existingLikeRes.data) {
          await LikeRepo.deleteLike(existingLikeRes.data.id);
          const createMatchRes = await MatchRepo.createMatch({
            initiatorId: matchId,
            targetId: user.id,
          });
          if (createMatchRes.status === "error") return createMatchRes;

          return { status: "success", data: { isMatch: true } };
        } else {
          const newLike = await LikeRepo.createLike({
            senderId: user.id,
            receiverId: matchId,
          });
          if (newLike.status === "error") return newLike;

          
          return { status: "success", data: { isMatch: false } };
        }
      }
      case "rejection": {
        const createRejectionRes = await RejectionRepo.createRejection({
          senderId: user.id,
          receiverId: matchId,
        });
        if (createRejectionRes.status === "error") return createRejectionRes;

        return { status: "success", data: { isMatch: false } };
      }
    }
  } catch {
    return { status: "error", message: "Failed to handle swipe" };
  }
};
