// import { NextResponse } from "next/server";
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/"]);

// export default clerkMiddleware((auth, request) => {
//   if (isProtectedRoute(request)) {
//     auth().protect();
//   }
//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/((?!.*..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
