import SidebarMessageItem from "./sidebar-message-item";
import SidebarTopNav from "./sidebar-top-nav";

const matches = [
  {
    id: 1,
    name: "Julia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: true,
    state: "unselected"
  },
  {
    id: 2,
    name: "Wiktoria",
    text: "Hey! How are you Peter dumbass?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "selected"
  },
  {
    id: 3,
    name: "Laura",
    text: "Really long text full of words that can't fit into the screen",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 4,
    name: "Paulina",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 5,
    name: "Oliwia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 56,
    name: "Oliwia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 55,
    name: "Oliwia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 54,
    name: "Oliwia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 53,
    name: "Oliwia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 52,
    name: "Oliwia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
  {
    id: 51,
    name: "Oliwia",
    text: "Hey! How are you?",
    imageUrl: "/test_avatar.jpg",
    isVerified: false,
    state: "unselected"
  },
] as const;

export default function Sidebar() {
  return (
    <aside className="fixed inset-0 w-[356px] bg-[#111418] border-r border-[#3c444f] h-full flex flex-col">
      <SidebarTopNav />
      <div className="px-5 py-3 flex items-center gap-x-6 text-white">
        <div className="font-semibold text-sm">Matches</div>
        <div className="font-semibold text-sm">Messages</div>
      </div>
      <div className="overflow-y-auto flex-1 no-scrollbar">
        {matches.map((match) => (
          <SidebarMessageItem key={match.id} {...match} />
        ))}
      </div>
    </aside>
  );
}
