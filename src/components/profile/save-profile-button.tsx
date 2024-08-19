import { Button } from "@/components/ui/button";

type SaveProfileButtonProps = {
  onClick: () => void;
};

export default function SaveProfileButton({ onClick }: SaveProfileButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="gradient"
      className="rounded-full px-6 py-3 h-auto font-bold text-lg"
    >
      Save
    </Button>
  );
}
