import { datingGoals, images } from "@/constants";
import ImageSlider from "./image-slider";
import ProfileBasicInfo from "./profile-basic-info";
import ProfileDatingGoal from "./profile-dating-goal";
import ProfileSection from "./profile-section";
import ProfileInfoSection from "./profile-info-section";
import {
  AtSign,
  Cigarette,
  Dumbbell,
  GraduationCap,
  MessageCircleHeart,
  MessageSquareText,
  MoonStar,
  Pizza,
  Puzzle,
  Sunrise,
  Wine,
} from "lucide-react";

export default function ProfileSidebar() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-[#111418] border-l border-[#3c444f]">
      <div className="w-full aspect-[4/5]">
        <ImageSlider images={images} />
      </div>
      <ProfileBasicInfo name="Paulina" age={24} height={170} distance={8} />
      <ProfileSection showBorderBottom={false}>
        <ProfileDatingGoal datingGoal={datingGoals[0]} />
      </ProfileSection>
      <ProfileInfoSection
        title="Lifestyle"
        profileInfoItems={[
          { title: "On special occasions", icon: Wine, isShared: true },
          { title: "Non-smoker", icon: Cigarette, isShared: true },
          { title: "Sometimes", icon: Dumbbell, isShared: false },
          { title: "Omnivore", icon: Pizza, isShared: false },
          { title: "Passive scroller", icon: AtSign, isShared: false },
          { title: "In a spectrum", icon: Sunrise, isShared: false },
        ]}
      />
      <ProfileInfoSection
        title="Basics"
        profileInfoItems={[
          { title: "Sagittarius", icon: MoonStar, isShared: false },
          { title: "In grad school", icon: GraduationCap, isShared: false },
          { title: "INFP", icon: Puzzle, isShared: false },
          {
            title: "Better in person",
            icon: MessageSquareText,
            isShared: false,
          },
          { title: "Time together", icon: MessageCircleHeart, isShared: false },
        ]}
      />
      <ProfileInfoSection
        title="Passions"
        profileInfoItems={[
          { title: "Sushi", isShared: false },
          { title: "Hot Springs", isShared: false },
          { title: "Cafe hopping", isShared: false },
          { title: "Photography", isShared: false },
        ]}
      />
    </div>
  );
}
