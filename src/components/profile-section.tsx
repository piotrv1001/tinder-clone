import { cn } from "@/lib/utils";

type ProfileSectionProps = {
  children: React.ReactNode;
  showBorderBottom?: boolean;
};

export default function ProfileSection({
  children,
  showBorderBottom = true,
}: ProfileSectionProps) {
  return (
    <div
      className={cn(
        "py-[10px] px-4",
        showBorderBottom && "border-b border-[#3c444f]"
      )}
    >
      {children}
    </div>
  );
}
