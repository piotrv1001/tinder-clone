import { getCurrentUser } from "@/lib/utils";
import { UserRepo, UserWithImages } from "../repo/user-repo";

export class UserService {
  static async getLoggedUserWithImages(): Promise<UserWithImages | null> {
    const user = await getCurrentUser();
    if (!user?.id) return null;

    const userWithImagesRes = await UserRepo.getUserWithImagesById(user.id);
    if (userWithImagesRes.status === "error") return null;

    return userWithImagesRes.data;
  }
}
