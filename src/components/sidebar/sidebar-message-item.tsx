import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SidebarMessageItemProps = {
  id: number;
  name: string;
  text: string;
  imageUrl: string;
  isVerified: boolean;
  state: "selected" | "unselected" | "default";
};

export default function SidebarMessageItem({
  id,
  name,
  text,
  imageUrl,
  isVerified,
  state,
}: SidebarMessageItemProps) {
  return (
    <Link href={`/messages/${id}`}>
      <div
        className={cn(
          "cursor-pointer hover:border-r-4 border-[#ff4458]",
          state === "selected" && "border-r-4 bg-[#111418]",
          state === "unselected" && "bg-black"
        )}
      >
        <div className="px-4 py-3 flex items-center gap-x-4">
          <Image
            src={imageUrl}
            alt="User avatar"
            width={78}
            height={78}
            className="rounded-full size-[78px]"
          />
          <div className="flex flex-col">
            <div className="flex gap-x-2 items-center">
              <span className="text-lg font-bold text-white">{name}</span>
              {isVerified && (
                <div className="size-[18px] rounded-full bg-[#1786ff] flex justify-center items-center">
                  <CheckIcon size={12} className="text-white" />
                </div>
              )}
            </div>
            <p className="text-sm text-[#7c8591] line-clamp-1">{text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
