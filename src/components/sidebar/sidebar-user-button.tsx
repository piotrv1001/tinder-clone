import Image from "next/image";
import Link from "next/link";

type SidebarUserButtonProps = {
  name: string;
  imgUrl: string;
};

export default function SidebarUserButton({
  name,
  imgUrl,
}: SidebarUserButtonProps) {
  return (
    <Link href="/">
      <div className="flex gap-x-2 rounded-full hover:bg-[#411b27] p-1 pr-2 w-max items-center cursor-pointer transition-colors duration-200">
        <Image
          src={imgUrl}
          alt="User avatar"
          className="rounded-full size-9"
          width={36}
          height={36}
        />
        <span className="text-white font-semibold text-sm">{name}</span>
      </div>
    </Link>
  );
}
