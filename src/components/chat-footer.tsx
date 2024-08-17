"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { SmileIcon } from "lucide-react";

export default function ChatFooter() {
  const [text, setText] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  return (
    <div className="border-t border-[#3c444f] bg-[#111418] py-[12px] px-4 flex items-center gap-x-4 relative">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
        className="h-[40px] bg-[#111418] min-h-[40px] text-white resize-none overflow-hidden focus-visible:outline-none"
      />
      <button
        className="rounded-full size-[34px] flex justify-center items-center group"
        onClick={() => setIsEmojiPickerOpen((prev) => !prev)}
      >
        <SmileIcon size={28} className="text-[#7c8591]" />
      </button>
      <Button
        variant="gradient"
        className="uppercase rounded-[100px] font-semibold px-6 disabled:from-[#3c444f] disabled:to-[#3c444f] disabled:opacity-100"
        disabled={!text}
      >
        Send
      </Button>
      <EmojiPicker
        style={{
          position: "absolute",
          bottom: 65,
          right: 0,
        }}
        theme={Theme.DARK}
        open={isEmojiPickerOpen}
        onEmojiClick={(e) => {
          setText((prev) => prev + e.emoji);
          setIsEmojiPickerOpen(false);
        }}
      />
    </div>
  );
}
