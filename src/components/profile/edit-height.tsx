import { RulerIcon } from "lucide-react";
import EditProfileSectionTitle from "./edit-profile-section-title";
import ProfileSectionIcon from "./profile-section-icon";

type EditHeightProps = {
  height: number;
};

export default function EditHeight({ height }: EditHeightProps) {
  return (
    <>
      <EditProfileSectionTitle title="Height" />
      <div
        className="cursor-pointer border-b border-[#3c444f] min-h-[52px] px-6 bg-[#111418] flex items-center justify-between group text-white text-[0.9rem]"
      >
        <div className="flex items-center gap-x-4">
          <RulerIcon size={20} className="text-[#656e7c]" />
          <span className="text-white">{height}&nbsp;cm</span>
        </div>
        <ProfileSectionIcon />
      </div>
    </>
  );
}
