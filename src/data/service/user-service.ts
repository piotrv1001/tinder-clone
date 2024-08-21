import { getCurrentUser } from "@/lib/utils";
import {
  UserRepo,
  UserWithImages,
  UserWithImagesAndPassions,
} from "../repo/user-repo";

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
}
