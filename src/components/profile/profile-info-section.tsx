import { LucideIcon } from "lucide-react";
import ProfileSection from "./profile-section";
import ProfileInfoItem from "./profile-info-item";

type ProfileInfoSectionProps = {
  title: string;
  profileInfoItems: { title: string; icon?: LucideIcon; isShared?: boolean }[];
  showBorderBottom?: boolean;
};

export default function ProfileInfoSection({
  title,
  profileInfoItems,
  showBorderBottom = true,
}: ProfileInfoSectionProps) {
  return (
    <ProfileSection showBorderBottom={showBorderBottom}>
      <div className="text-lg text-white font-bold mb-2">{title}</div>
      <div className="flex flex-wrap gap-2">
        {profileInfoItems.map((item) => (
          <ProfileInfoItem key={item.title} {...item} />
        ))}
      </div>
    </ProfileSection>
  );
}
