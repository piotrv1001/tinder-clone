import { LucideIcon } from "lucide-react";
import ProfileSection from "./profile-section";
import ProfileInfoItem from "./profile-info-item";

type ProfileInfoSectionProps = {
  title: string;
  profileInfoItems: { title: string; icon?: LucideIcon; isShared?: boolean }[];
};

export default function ProfileInfoSection({
  title,
  profileInfoItems,
}: ProfileInfoSectionProps) {
  return (
    <ProfileSection>
      <div className="text-lg text-white font-bold mb-2">{title}</div>
      <div className="flex flex-wrap gap-2">
        {profileInfoItems.map((item) => (
          <ProfileInfoItem key={item.title} {...item} />
        ))}
      </div>
    </ProfileSection>
  );
}
