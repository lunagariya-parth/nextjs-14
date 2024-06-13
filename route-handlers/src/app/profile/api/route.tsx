// export async function GET() {
//     return new Response('profile api');
// }

import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

//cookies in route handlers
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const HeaderList = headers();

//   console.log(requestHeaders.get("Authorization"));
    //   console.log(HeaderList.get("Authorization"));
    const theme = request.cookies.get('theme');
    const rpp =cookies().get('resultsPerPage');
    console.log(theme,rpp);
    
    cookies().set('resultsPerPage', '20');
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
