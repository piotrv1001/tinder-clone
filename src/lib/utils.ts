import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { auth } from "@/auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}

export const getFirstName = (name?: string | null) => name?.split?.(" ")?.[0];
