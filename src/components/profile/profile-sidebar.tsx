import { UserService } from "@/data/service/user-service";
import ProfileCard from "./profile-card";

export default async function ProfileSidebar() {
  const user = await UserService.getLoggedUser();
  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-[#111418] border-l border-[#3c444f]">
      {user && <ProfileCard userProfile={user} matchProfile={user} />}
    </div>
  );
}
