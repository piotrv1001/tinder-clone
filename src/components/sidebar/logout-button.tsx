"use client";

import { logoutAction } from "@/actions/logout-action";
import { LogOutIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function LogoutButton() {
  const onClick = async () => {
    try {
      await logoutAction();
      window.location.href = "/login";
    } catch {
      toast({
        variant: "error",
        description: "Failed to log out",
      });
    }
  };
  return (
    <button onClick={onClick} className="flex items-center gap-x-2">
      <LogOutIcon size={18} className="text-white" />
      <span className="text-white font-semibold text-sm">Log out</span>
    </button>
  );
}
