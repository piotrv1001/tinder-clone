import { cn } from "@/lib/utils";

type ImageButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ImageButton({
  children,
  className,
  onClick,
}: ImageButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer absolute size-[26px] -right-2 -bottom-2 rounded-full border flex justify-center items-center",
        className
      )}
    >
      {children}
    </button>
  );
}
