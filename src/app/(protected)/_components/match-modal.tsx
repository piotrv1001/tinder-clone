import DialogWrapper from "@/components/dialog-wrapper";
import MatchFoundCard from "@/components/match-found-card";

type MatchModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userImageUrl: string;
  matchImageUrl: string;
  matchName: string;
};

export default function MatchModal({
  open,
  onOpenChange,
  ...props
}: MatchModalProps) {
  return (
    <DialogWrapper
      title="It's a match!"
      description="Say something nice"
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="w-[375px] h-[667px]">
        <MatchFoundCard {...props} />
      </div>
    </DialogWrapper>
  );
}
