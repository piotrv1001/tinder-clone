import EditHeight from "@/components/profile/edit-height";
import EditProfileDescription from "@/components/profile/edit-profile-description";
import EditProfilePassions from "@/components/profile/edit-profile-passions";
import ImageGrid from "@/components/profile/image-grid";
import SaveProfileButton from "@/components/profile/save-profile-button";

export default function ProfileEditPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative">
        <div className="w-[375px] h-[667px] rounded-[8px] overflow-y-auto no-scrollbar bg-black shadow-md shadow-[#21262e] pb-[75px]">
          <ImageGrid />
          <SectionDescription text="Add a video, pic or Loop to get 4% closer to completing your profile and you may event get more Likes." />
          <EditProfileDescription name="Piotr" />
          <SectionDescription text="Do not include social media handles or other contact information in your profile." />
          <EditProfilePassions
            passions={[
              "Running",
              "Comedy",
              "Soccker",
              "E-Sports",
              "Basketball",
            ]}
          />
          <EditHeight height={188} />
        </div>
        <div className="absolute bottom-0 pb-4 flex justify-center w-full bg-gradient-to-b to-black from-transparent">
          <SaveProfileButton />
        </div>
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
