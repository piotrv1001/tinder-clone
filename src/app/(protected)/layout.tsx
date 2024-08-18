import Sidebar from "@/components/sidebar/sidebar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <>
      <Sidebar />
      <main className="h-full bg-black pl-[356px]">{children}</main>
    </>
  );
}
