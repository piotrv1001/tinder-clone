import SidebarWrapper from "@/components/sidebar/sidebar-wrapper";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <>
      <SidebarWrapper />
      <main className="h-full bg-black pl-[356px]">{children}</main>
    </>
  );
}
