"use client";

import Image from "next/image";
import ImageSlider from "../image-slider";
import { images, datingGoals } from "@/constants";
import {
  Wine,
  Cigarette,
  Dumbbell,
  Pizza,
  AtSign,
  Sunrise,
  MoonStar,
  GraduationCap,
  Puzzle,
  MessageSquareText,
  MessageCircleHeart,
} from "lucide-react";
import ProfileBasicInfo from "./profile-basic-info";
import ProfileDatingGoal from "./profile-dating-goal";
import ProfileInfoSection from "./profile-info-section";
import ProfileSection from "./profile-section";

export default function ProfileCard() {
  return (
    <div className="overflow-y-auto no-scrollbar bg-[#111418]">
      <div className="w-full aspect-[4/5]">
        <ImageSlider
          data={images}
          keyProp="id"
          render={(image) => {
            return (
              <Image
                src={image.src}
                alt="User image"
                className="object-cover absolute inset-0 select-none"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            );
          }}
        />
      </div>
      <ProfileBasicInfo name="Paulina" age={24} height={170} distance={8} />
      <ProfileSection showBorderBottom={false}>
        <p className="text-[#b9bfc8]">
          Hey, I am Paulina! I am open to meeting new people, especially if it
          is a good excuse to take a break from my thesis. Besides writing (or
          not writing) my thesis, I work and take care of my puppy. You can
          bribe me with them. You can find me as a passive scroller on the feed
        </p>
      </ProfileSection>
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
        showBorderBottom={false}
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
