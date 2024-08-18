"use client";

import { signIn } from "next-auth/react";
import GoogleLoginButton from "./google-login-button";
import { FaFireFlameCurved } from "react-icons/fa6";

export default function LoginCard() {
  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <div className="w-[375px] h-[667px] bg-gradient-to-tr from-[#fd267a] to-[#ff6036] flex justify-around items-center flex-col px-8 rounded-[8px]">
      <div className="flex items-center gap-x-2 text-white">
        <FaFireFlameCurved size={44} className="text-white" />
        <span className="text-5xl font-bold">tinder</span>
      </div>
      <div className="space-y-8">
        <p className="text-sm text-white text-center">
          By clicking Log In, you agree with our&nbsp;
          <span className="underline">Terms</span>. Learn how we process your
          data in our <span className="underline">Privacy Policy</span>
          &nbsp;and&nbsp;
          <span className="underline">Cookies Policy</span>.
        </p>
        <GoogleLoginButton onClick={handleGoogleLogin} />
      </div>
    </div>
  );
}
