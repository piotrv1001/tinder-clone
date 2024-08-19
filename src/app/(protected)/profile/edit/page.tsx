import { UserService } from "@/data/service/user-service";
import ProfileEditWrapper from "./_components/profile-edit-wrapper";

export default async function ProfileEditPage() {
  const user = await UserService.getLoggedUser();

  return (
    <div className="w-full h-full flex justify-center items-center">
      {user && <ProfileEditWrapper user={user} />}
    </div>
  );
}
