import { getFirstName } from "@/lib/utils";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

type MatchFoundCardProps = {
  userImageUrl: string;
  matchImageUrl: string;
  matchName: string;
};

export default function MatchFoundCard({
  userImageUrl,
  matchImageUrl,
  matchName,
}: MatchFoundCardProps) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#03ab64] to-[#001f00] flex flex-col gap-y-4 justify-center items-center relative">
      <div className="flex">
        <Image
          src={matchImageUrl}
          alt="User image"
          width={180}
          height={180}
          className="z-30 rounded-full border-4 border-white"
        />
        <Image
          src={userImageUrl}
          alt="User image"
          width={180}
          height={180}
          className="z-20 -ml-5 rounded-full border-4 border-white"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold uppercase text-white z-10 italic pl-6 match-text">
          It&apos;s a
        </div>
        <div className="text-8xl font-bold italic text-white match-text z-10">
          Match
        </div>
      </div>
      <div className="text-white font-semibold text-lg">
        You matched with {getFirstName(matchName)}
      </div>
      <HeartIcon className="size-full" />
      <HeartIcon className="size-[75%]" />
      <HeartIcon className="size-[50%]" />
      <div className="absolute right-[10%] top-[9%]">
        <PiStarFourFill className="text-white size-[50px]" />
      </div>
      <div className="absolute right-[20%] top-[17%]">
        <PiStarFourFill className="text-white size-[30px]" />
      </div>
    </div>
  );
}

type HeartIconProps = {
  className?: string;
};

function HeartIcon({ className }: HeartIconProps) {
  return (
    <div className="absolute inset-0 flex justify-center items-center mb-60">
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#8af051" offset="0%" />
          <stop stopColor="#005812" offset="100%" />
        </linearGradient>
      </svg>
      <FaHeart className={className} style={{ fill: "url(#blue-gradient)" }} />
    </div>
  );
}
