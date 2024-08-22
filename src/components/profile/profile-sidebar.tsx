import { UserService } from "@/data/service/user-service";
import ProfileCard from "./profile-card";
import { UserWithImagesAndPassions } from "@/data/repo/user-repo";

type ProfileSidebarProps = {
  matchedProfile: UserWithImagesAndPassions;
};

export default async function ProfileSidebar({
  matchedProfile,
}: ProfileSidebarProps) {
  const user = await UserService.getLoggedUser();
  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-[#111418] border-l border-[#3c444f]">
      {user && (
        <ProfileCard
          userProfile={user}
          matchProfile={matchedProfile}
        />
      )}
    </div>
  );
}
