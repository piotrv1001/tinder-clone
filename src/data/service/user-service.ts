import { getCurrentUser } from "@/lib/utils";
import {
  UserRepo,
  UserWithImages,
  UserWithImagesAndPassions,
} from "../repo/user-repo";
import {
  MatchRepo,
  MatchWithMessage,
  MatchWithMessages,
} from "../repo/match-repo";

export class UserService {
  static async getLoggedUser(): Promise<UserWithImagesAndPassions | null> {
    const user = await getCurrentUser();
    if (!user?.id) return null;

    const userWithImagesRes = await UserRepo.getUserWithImagesById(user.id);
    if (userWithImagesRes.status === "error") return null;

    return userWithImagesRes.data;
  }
  static async getMatchesForLoggedUser(): Promise<UserWithImages[]> {
    const user = await getCurrentUser();
    if (!user?.id) return [];

    const potentialMatchesRes = await UserRepo.getPotentialMatches({
      userId: user.id,
      page: 1,
    });
    if (potentialMatchesRes.status === "error") return [];

    return potentialMatchesRes.data;
  }
  static async getMatchedUsersForLoggedUser(): Promise<MatchWithMessage[]> {
    const user = await getCurrentUser();
    if (!user?.id) return [];

    const matchesRes = await MatchRepo.getMatchesByUserIdWithLastMessage(
      user.id
    );
    if (matchesRes.status === "error") return [];

    return matchesRes.data;
  }
  static async getMatchById(
    matchId: string
  ): Promise<MatchWithMessages | null> {
    const user = await getCurrentUser();
    if (!user?.id) return null;

    const matchRes = await MatchRepo.getMatchByUserIdWithMessages({
      matchId,
      userId: user.id,
    });
    if (matchRes.status === "error") return null;

    return matchRes.data;
  }
}
