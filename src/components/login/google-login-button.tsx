"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

type GoogleLoginButtonProps = {
  onClick: () => void;
};

export default function GoogleLoginButton({ onClick }: GoogleLoginButtonProps) {
  return (
    <Button
      size="lg"
      className="w-full flex justify-center gap-x-4 rounded-full bg-white hover:bg-white"
      onClick={onClick}
    >
      <FcGoogle className="h-5 w-5" />
      <span className="uppercase text-gray-700 font-semibold">Login with Google</span>
    </Button>
  );
}
