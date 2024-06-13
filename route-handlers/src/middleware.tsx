import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname == "/profile")
//     return NextResponse.redirect(new URL("/home", request.url));
//   // this will change the page content not url.
//   // it will show the content of /home instedof /profile
//   // return NextResponse.rewrite(new URL("/home", request.url));
// }

// export function middleware(request: NextRequest) {
//       return NextResponse.redirect(new URL("/", request.url));

// }
// export const config = {
//   matcher: "/profile",
// };

//middleware for theme set
export function middleware(request: NextRequest) {
  const Response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) Response.cookies.set("theme", "dark");
  // if (themePreference) Response.cookies.set("theme", "light");
  return Response;
}
