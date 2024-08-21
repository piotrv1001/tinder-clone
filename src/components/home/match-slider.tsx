"use client";

import Image from "next/image";
import ImageSlider from "../image-slider";
import { HeartIcon, LucideIcon, MapPinIcon, XIcon } from "lucide-react";
import { cn, getFirstName } from "@/lib/utils";
import { useState } from "react";
import { UserWithImages } from "@/data/repo/user-repo";

type MatchSlideProps = {
  user: UserWithImages;
  onLike: () => void;
  onReject: () => void;
};

export default function MatchSlider({
  user,
  onLike,
  onReject,
}: MatchSlideProps) {
  return (
    <div className="w-[375px] h-[667px] shadow-md shadow-[#21262e] rounded-[8px] overflow-hidden flex flex-col">
      <ImageSlider
        data={user.images}
        keyProp="id"
        render={(image) => {
          return (
            <div className="w-full h-[566px] relative">
              <Image
                src={image.url}
                alt="User image"
                className="object-cover absolute inset-0 select-none"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-y-1 p-5 text-white select-none">
                <div className="text-4xl font-bold">{`${getFirstName(
                  user.name
                )} ${user.age ?? ""}`}</div>
                <div className="flex gap-x-2 items-center">
                  <MapPinIcon size={18} />
                  <span>32 kilometers away</span>
                </div>
              </div>
            </div>
          );
        }}
      />
      <div className="bg-black flex justify-around items-center py-4 px-2">
        <IconText
          onClick={onReject}
          icon={XIcon}
          btnClassName="border-[#c63949]"
          iconClassName="text-[#ed3251]"
        />
        <IconText
          onClick={onLike}
          icon={HeartIcon}
          btnClassName="border-[#118256]"
          iconClassName="text-[#59f9c9]"
        />
      </div>
    </div>
  );
}

type IconTextProps = {
  icon: LucideIcon;
  btnClassName: string;
  iconClassName: string;
  onClick: () => void;
};

function IconText({
  icon: Icon,
  btnClassName,
  iconClassName,
  onClick,
}: IconTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "size-[68px] rounded-full border flex justify-center items-center",
        btnClassName
      )}
    >
      <Icon
        size={34}
        className={cn(
          "transition-transform",
          isHovered && "scale-110",
          iconClassName
        )}
      />
    </button>
  );
}
