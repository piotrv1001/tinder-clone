"use client";

import { cn } from "@/lib/utils";
import { ChatMessage as TChatMessage } from "@/types/chat-message";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";

type ChatMessageProps = {
  message: TChatMessage;
};

export default function ChatMessage({
  message: { content, avatarUrl, isOtherPerson, createdAt },
}: ChatMessageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "w-full flex justify-between items-center",
        isOtherPerson ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "flex gap-x-4 items-center",
          isOtherPerson ? "flex-row" : "flex-row-reverse"
        )}
      >
        {isOtherPerson && (
          <div className="w-[40px]">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt="User image"
                className="rounded-full"
                width={40}
                height={40}
              />
            )}
          </div>
        )}
        <div
          onMouseMove={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "px-3 py-[10px] text-white text-sm rounded-[16px]",
            isOtherPerson ? "bg-[#21262e]" : "bg-[#106bd5]"
          )}
        >
          {content}
        </div>
        <span
          className={cn(
            "text-xs text-[#b9bfcb] opacity-0 transition-opacity",
            isHovered && "opacity-100"
          )}
        >
          {format(createdAt, "hh:mm a")}
        </span>
      </div>
    </div>
  );
}
