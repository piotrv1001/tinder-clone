import Link from "next/link";
import EditProfileSectionTitle from "./edit-profile-section-title";
import ProfileSectionIcon from "./profile-section-icon";

type EditProfilePassionsProps = {
  passions: string[];
};

export default function EditProfilePassions({
  passions,
}: EditProfilePassionsProps) {
  return (
    <>
      <EditProfileSectionTitle title="Passions" />
      <Link
        href="/profile/edit/interests"
        className="border-b border-[#3c444f] min-h-[52px] px-6 bg-[#111418] flex items-center justify-between group text-white text-[0.9rem]"
      >
        <span>
          {passions.length > 0 ? passions.join(", ") : "Not specified"}
        </span>
        <ProfileSectionIcon />
      </Link>
    </>
  );
}
