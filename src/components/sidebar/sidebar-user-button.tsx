"use client";

import { useUser } from "@/hooks/use-user";
import Link from "next/link";
import UserAvatar from "../user-avatar";

export default function SidebarUserButton() {
  const user = useUser();
  return (
    <Link href="/profile">
      <div className="flex gap-x-2 rounded-full hover:bg-[#411b27] p-1 pr-2 w-max items-center cursor-pointer transition-colors duration-200">
        <UserAvatar src={user?.image} />
        <span className="text-white font-semibold text-sm">
          {user?.name?.split(" ")?.[0] ?? "User"}
        </span>
      </div>
    </Link>
  );
}
