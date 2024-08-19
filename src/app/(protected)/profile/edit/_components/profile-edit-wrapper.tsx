"use client";

import { updateUserAction } from "@/actions/update-user-action";
import EditHeight from "@/components/profile/edit-height";
import EditProfileDescription from "@/components/profile/edit-profile-description";
import EditProfilePassions from "@/components/profile/edit-profile-passions";
import ImageGrid from "@/components/profile/image-grid";
import SaveProfileButton from "@/components/profile/save-profile-button";
import { toast } from "@/components/ui/use-toast";
import { UserWithImagesAndPassions } from "@/data/repo/user-repo";
import { useState } from "react";

type ProfileEditWrapperProps = {
  user: UserWithImagesAndPassions;
};

export default function ProfileEditWrapper({
  user: initialUser,
}: ProfileEditWrapperProps) {
  const [user, setUser] = useState(initialUser);

  const handleSaveUser = async () => {
    const { images, passions, ...rest } = user;
    const updateUserRes = await updateUserAction(rest);
    if (updateUserRes.status === "success") {
      toast({
        variant: "success",
        description: "Profile updated successfully",
      });
      setUser((prev) => ({ ...prev, ...updateUserRes.data }));
    } else {
      toast({
        variant: "error",
        description: updateUserRes.message,
      });
    }
  };

  return (
    <div className="relative">
      <div className="w-[375px] h-[667px] rounded-[8px] overflow-y-auto no-scrollbar bg-black shadow-md shadow-[#21262e] pb-[75px]">
        <ImageGrid initialImages={user?.images ?? []} />
        <SectionDescription text="Add a video, pic or Loop to get 4% closer to completing your profile and you may even get more Likes." />
        <EditProfileDescription
          name="Piotr"
          value={user.description ?? ""}
          onValueChange={(value) => setUser({ ...user, description: value })}
        />
        <SectionDescription text="Do not include social media handles or other contact information in your profile." />
        <EditProfilePassions
          passions={user?.passions.map((passion) => passion.name) ?? []}
        />
        <EditHeight height={user.height} onClick={() => {}} />
      </div>
      <div className="absolute bottom-0 pb-4 flex justify-center w-full bg-gradient-to-b to-black from-transparent">
        <SaveProfileButton onClick={handleSaveUser} />
      </div>
    </div>
  );
}

type SectionDescriptionProps = {
  text: string;
};

function SectionDescription({ text }: SectionDescriptionProps) {
  return (
    <p className="mt-[10px] px-4 text-[#b9bfc8] text-center text-sm">{text}</p>
  );
}
