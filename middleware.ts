// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// {
//   publicRoutes: ['/api/webhook/clerk']
// }


// AS PER THE PROJECT - VIDEO
// import { authMiddleware } from "@clerk/nextjs/server"; 

// export default authMiddleware({
//   publicRoutes: ['/api/webhooks/clerk']
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
// }



// AS PER DOCUMENTATION - CHAT GPT
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the public routes
const publicRoutes = createRouteMatcher(['/api/webhooks/clerk']);

export default clerkMiddleware();

// export default clerkMiddleware((auth, req) => {
//   // Protect all routes except the public ones
//   if (!publicRoutes(req)) {
//     auth().protect();
//   }
// });

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
