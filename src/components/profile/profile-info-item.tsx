import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type ProfileInfoItemProps = {
  title: string;
  icon?: LucideIcon;
  isShared?: boolean;
};

export default function ProfileInfoItem({
  title,
  icon: Icon,
  isShared = false,
}: ProfileInfoItemProps) {
  return (
    <div
      className={cn(
        "rounded-full flex justify-center items-center gap-x-2 border-2 border-[#7c8591] py-1 px-3",
        isShared && "border-[#ff445a]"
      )}
    >
      {Icon && (
        <Icon
          size={16}
          className={cn("text-[#7c8591]", isShared && "text-[#ff445a]")}
        />
      )}
      <span className="text-white text-sm">{title}</span>
    </div>
  );
}
