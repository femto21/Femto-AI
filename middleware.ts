import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
  debug: false,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
