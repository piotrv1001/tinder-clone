"use client";

import { XIcon } from "lucide-react";
import Image from "next/image";
import ImageButton from "./image-button";

type ImagePreviewProps = {
  src: string;
  onClick: () => void;
};

export default function ImagePreview({ src, onClick }: ImagePreviewProps) {
  return (
    <div className="w-full aspect-[3/4] relative">
      <Image
        src={src}
        alt="User image"
        fill
        className="absolute inset-0 object-cover rounded-[8px]"
        sizes="33vw"
      />
      <ImageButton className="border-[#7c8591] bg-white flex" onClick={onClick}>
        <XIcon size={22} className="text-[#7c8591]" />
      </ImageButton>
    </div>
  );
}
