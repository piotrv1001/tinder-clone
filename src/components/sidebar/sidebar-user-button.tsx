"use client";

import { useUser } from "@/hooks/use-user";
import Link from "next/link";
import UserAvatar from "../user-avatar";
import { getFirstName } from "@/lib/utils";

export default function SidebarUserButton() {
  const user = useUser();
  return (
    <Link href="/profile">
      <div className="flex gap-x-2 rounded-full hover:bg-[#411b27] p-1 pr-2 w-max items-center cursor-pointer transition-colors duration-200">
        <UserAvatar src={user?.image} />
        <span className="text-white font-semibold text-sm">
          {getFirstName(user?.name) ?? "User"}
        </span>
      </div>
    </Link>
  );
}
