import { getFirstName } from "@/lib/utils";
import { format } from "date-fns";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ChatHeaderProps = {
  imgUrl?: string | null;
  name?: string | null;
  date: Date;
};

export default function ChatHeader({ imgUrl, name, date }: ChatHeaderProps) {
  return (
    <div className="px-3 py-4 border-b border-[#3c444f] h-[87px] bg-[#111418] w-full flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="User image"
            width={44}
            height={44}
            className="rounded-full size-[44px] outline outline-white outline-3"
          />
        )}
        <span className="text-[#7c8591] text-lg font-medium">
          You matched with {getFirstName(name)} on {format(date, "dd/MM/yyyy")}
        </span>
      </div>
      <Link href="/">
        <button className="rounded-full size-[34px] border-2 border-[#7c8591] flex justify-center items-center group">
          <XIcon
            size={28}
            className="text-[#7c8591] group-hover:rotate-180 transition-transform duration-200"
          />
        </button>
      </Link>
    </div>
  );
}
