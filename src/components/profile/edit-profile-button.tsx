import Link from "next/link";
import { Button } from "../ui/button";

type EditProfileButtonProps = {
  completePercentage: number;
};

export default function EditProfileButton({
  completePercentage,
}: EditProfileButtonProps) {
  return (
    <Link href="/profile/edit">
      <Button variant="gradient" className="rounded-full px-6 py-3 h-auto font-bold">
        <span className="text-lg">Edit info&nbsp;</span>
        <span className="text-base">({completePercentage}% complete)</span>
      </Button>
    </Link>
  );
}
