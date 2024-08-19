import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Suspense } from "react";
import Image from "next/image";

type UserAvatarProps = {
  src?: string | null;
};

export default function UserAvatar({ src }: UserAvatarProps) {
  return (
    <Avatar>
      <Suspense fallback={<FallbackPhoto />}>
        {src ? (
          <Image
            src={src}
            alt="User image"
            className="rounded-full size-9"
            width={36}
            height={36}
          />
        ) : (
          <FallbackPhoto />
        )}
      </Suspense>
    </Avatar>
  );
}

function FallbackPhoto() {
  return (
    <AvatarFallback className="bg-white text-black rounded-full size-9">
      <FaUser />
    </AvatarFallback>
  );
}
