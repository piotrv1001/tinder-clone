"use client";

import { Textarea } from "../ui/textarea";
import { MAX_PROFILE_DESCRIPTION_LENGTH } from "@/constants";
import EditProfileSectionTitle from "./edit-profile-section-title";

type EditProfileDescriptionProps = {
  value: string;
  onValueChange: (value: string) => void;
  name: string;
};

export default function EditProfileDescription({
  value,
  onValueChange,
  name,
}: EditProfileDescriptionProps) {
  const charsLeft = MAX_PROFILE_DESCRIPTION_LENGTH - value.length;

  return (
    <>
      <EditProfileSectionTitle title={`About ${name}`} />
      <Textarea
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="h-[45px] bg-[#111418] min-h-[45px] text-white resize-none overflow-hidden focus-visible:outline-none rounded-none"
      />
      <div className="text-right w-full bg-[#111418] border-b border-[#3c444f] text-[#7c8591] pr-3 pb-3">
        {charsLeft}
      </div>
    </>
  );
}
