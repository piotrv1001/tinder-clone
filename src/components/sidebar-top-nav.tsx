import SidebarUserButton from "./sidebar-user-button";

export default function SidebarTopNav() {
  return (
    <nav className="h-[87px] bg-gradient-to-tr from-[#fd267a] to-[#ff6036] flex items-center px-3">
      <SidebarUserButton imgUrl="/test_avatar.jpg" name="Peter" />
    </nav>
  )
}