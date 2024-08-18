import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";

export default function SidebarLogo() {
  return (
    <Link
      href="/"
      className="hover:scale-110 transition-transform cursor-pointer rounded-full size-[40px] flex justify-center items-center bg-[#380d16]"
    >
      <FaFireFlameCurved size={20} className="text-[#ff4458]" />
    </Link>
  );
}
