"use client";

import Image from "next/image";
import ImageSlider from "../image-slider";
import { datingGoals } from "@/constants";
import {
  Wine,
  Cigarette,
  Dumbbell,
  Pizza,
  Sunrise,
  GraduationCap,
  MessageSquareText,
  MessageCircleHeart,
} from "lucide-react";
import ProfileBasicInfo from "./profile-basic-info";
import ProfileDatingGoal from "./profile-dating-goal";
import ProfileInfoSection from "./profile-info-section";
import { ProfileInfoItem } from "@/types/profile-info-item";
import { UserWithImagesAndPassions } from "@/data/repo/user-repo";
import ProfileSection from "./profile-section";

type ProfileCardProps = {
  userProfile: UserWithImagesAndPassions;
  matchProfile?: UserWithImagesAndPassions;
};

export default function ProfileCard({
  userProfile,
  matchProfile,
}: ProfileCardProps) {
  const user = matchProfile ?? userProfile;
  const datingGoal = datingGoals.find(
    (goal) => goal.title === user.relationshipGoal
  );

  const lifestyleItems = [
    {
      title: user?.alcohol,
      icon: Wine,
      isShared: userProfile.alcohol === matchProfile?.alcohol,
    },
    {
      title: user?.smoker,
      icon: Cigarette,
      isShared: userProfile.smoker === matchProfile?.smoker,
    },
    {
      title: user?.gym,
      icon: Dumbbell,
      isShared: userProfile.gym === matchProfile?.gym,
    },
    {
      title: user?.diet,
      icon: Pizza,
      isShared: userProfile.diet === matchProfile?.diet,
    },
    {
      title: user?.sleep,
      icon: Sunrise,
      isShared: userProfile.sleep === matchProfile?.sleep,
    },
  ].filter((item) => item.title != null) as ProfileInfoItem[];

  const basicsItems = [
    {
      title: user.education,
      icon: GraduationCap,
      isShared: userProfile.education === matchProfile?.education,
    },
    {
      title: user.chat,
      icon: MessageSquareText,
      isShared: userProfile.chat === matchProfile?.chat,
    },
    {
      title: user.loveStyle,
      icon: MessageCircleHeart,
      isShared: userProfile.loveStyle === matchProfile?.loveStyle,
    },
  ].filter((item) => item.title != null) as ProfileInfoItem[];

  const passions = user.passions.map((passion) => ({
    title: passion.name,
    isShared: matchProfile?.passions.some(
      (matchPassion) => matchPassion.name === passion.name
    ),
  }));

  return (
    <div className="overflow-y-auto no-scrollbar bg-[#111418]">
      <div className="w-full aspect-[4/5]">
        <ImageSlider
          data={user.images}
          keyProp="id"
          render={(image) => {
            return (
              <Image
                src={image.url}
                alt="User image"
                className="object-cover absolute inset-0 select-none"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            );
          }}
        />
      </div>
      <ProfileBasicInfo
        name={user.name?.split(" ")?.[0] ?? "User"}
        age={user.age}
        height={user.height}
      />
      <ProfileSection showBorderBottom={false}>
        <p className="text-[#b9bfc8]">{user?.description}</p>
      </ProfileSection>
      {datingGoal && (
        <ProfileSection showBorderBottom={false}>
          <ProfileDatingGoal datingGoal={datingGoal} />
        </ProfileSection>
      )}
      <ProfileInfoSection title="Lifestyle" profileInfoItems={lifestyleItems} />
      <ProfileInfoSection title="Basics" profileInfoItems={basicsItems} />
      <ProfileInfoSection
        showBorderBottom={false}
        title="Passions"
        profileInfoItems={passions}
      />
    </div>
  );
}
