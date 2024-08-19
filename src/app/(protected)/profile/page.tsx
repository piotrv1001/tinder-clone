import EditProfileButton from "@/components/profile/edit-profile-button";
import ProfileCard from "@/components/profile/profile-card";
import { UserService } from "@/data/service/user-service";

export default async function ProfilePage() {
  const user = await UserService.getLoggedUser();

  return (
    <div className="h-full bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-[375px] h-[667px] rounded-[8px] overflow-y-auto no-scrollbar bg-[#111418]">
          {user && <ProfileCard userProfile={user} />}
          <div className="absolute bottom-0 pb-4 flex justify-center w-full bg-gradient-to-b to-[#111418] from-transparent">
            <EditProfileButton completePercentage={53} />
          </div>
        </div>
      </div>
    </div>
  );
}
