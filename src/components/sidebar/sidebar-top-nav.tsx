"use client";

import SidebarLogo from "./sidebar-logo";
import SidebarUserButton from "./sidebar-user-button";
import { usePathname } from "next/navigation";

export default function SidebarTopNav() {
  const pathname = usePathname();
  const showLogo = pathname === "/profile";
  return (
    <nav className="h-[87px] bg-gradient-to-tr from-[#fd267a] to-[#ff6036] flex items-center px-3">
      {showLogo ? (
        <SidebarLogo />
      ) : (
        <SidebarUserButton imgUrl="/test_avatar.jpg" name="Peter" />
      )}
    </nav>
  );
}
