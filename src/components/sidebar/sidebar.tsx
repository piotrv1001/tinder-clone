"use client";

import { usePathname } from "next/navigation";
import SidebarMessageItem from "./sidebar-message-item";
import SidebarTopNav from "./sidebar-top-nav";
import { MatchWithMessage } from "@/data/repo/match-repo";

// const matches = [
//   {
//     id: 1,
//     name: "Julia",
//     text: "Hey! How are you?",
//     imageUrl: "/test_avatar.jpg",
//     isVerified: true,
//   },
//   {
//     id: 2,
//     name: "Wiktoria",
//     text: "Hey! How are you Peter dumbass?",
//     imageUrl: "/test_avatar.jpg",
//     isVerified: false,
//   },
//   {
//     id: 3,
//     name: "Laura",
//     text: "Really long text full of words that can't fit into the screen",
//     imageUrl: "/test_avatar.jpg",
//     isVerified: false,
//   },
//   {
//     id: 4,
//     name: "Paulina",
//     text: "Hey! How are you?",
//     imageUrl: "/test_avatar.jpg",
//     isVerified: false,
//   },
//   {
//     id: 5,
//     name: "Oliwia",
//     text: "Hey! How are you?",
//     imageUrl: "/test_avatar.jpg",
//     isVerified: false,
//   },
// ] as const;

type SidebarProps = {
  matches: MatchWithMessage[];
};

export default function Sidebar({ matches }: SidebarProps) {
  const pathname = usePathname();
  const match = pathname.match(/^\/messages\/(\d+)$/);
  const selectedId = match ? match[1] : null;

  const getStateForMatch = (id: string) => {
    if (!selectedId) return "default";
    return selectedId === id ? "selected" : "unselected";
  };

  return (
    <aside className="fixed inset-0 w-[356px] bg-[#111418] border-r border-[#3c444f] h-full flex flex-col">
      <SidebarTopNav />
      <div className="px-5 py-3 flex items-center gap-x-6 text-white">
        <div className="font-semibold text-sm">Matches</div>
        <div className="font-semibold text-sm">Messages</div>
      </div>
      <div className="overflow-y-auto flex-1 no-scrollbar">
        {matches.map((match) => (
          <SidebarMessageItem
            key={match.id}
            id={match.id}
            name={match.match.name ?? ""}
            state={getStateForMatch(match.id)}
            imageUrl={match.match.primaryImage?.url}
            text={match.lastMessage?.content ?? ""}
          />
        ))}
      </div>
    </aside>
  );
}
