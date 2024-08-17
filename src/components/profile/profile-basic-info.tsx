import { LucideIcon, MapPin, Ruler } from "lucide-react";
import ProfileSection from "./profile-section";

type ProfileBasicInfoProps = {
  name: string;
  age: number;
  height: number;
  distance: number;
};

export default function ProfileBasicInfo({
  name,
  age,
  height,
  distance,
}: ProfileBasicInfoProps) {
  return (
    <ProfileSection>
      <div className="text-3xl font-bold text-white mb-2">
        {name}&nbsp;{age}
      </div>
      <div className="space-y-1">
        <IconText icon={Ruler} text={`${height} cm`} />
        <IconText icon={MapPin} text={`${distance} kilometers away`} />
      </div>
    </ProfileSection>
  );
}

function IconText({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center space-x-2 text-base text-[#b9bfc8]">
      <Icon size={16} />
      <span>{text}</span>
    </div>
  );
}
