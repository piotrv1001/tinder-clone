import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/utils";
import { apiRoutes } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const user = await getCurrentUser();
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth && !!user?.emailVerified;

  const isApiRoute = apiRoutes.some((path) =>
    path.startsWith(nextUrl.pathname)
  );
  if (isApiRoute) {
    return NextResponse.next();
  }

  const isLoginRoute = nextUrl.pathname === "/login";
  if (isLoginRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
    return NextResponse.next();
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}