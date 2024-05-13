import { headers } from "next/headers";
import { comments } from "./data";
import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   //use url search params to filter
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//   const filteredComments = query
//     ? comments.filter((comment) => comment.text.includes(query))
//       : comments;
//     return Response.json(filteredComments);
//     // return Response.json(comments);
// }
export async function POST(request: Request) {
  //object recieved from request convert to json
  const comment = await request.json();
  //make an object from recieved object
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);

  //send a response to POST request
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-type": "application/json",
    },
    status: 201,
  });
}

//url query parameters
// export async function GET() {

// }

//headers in route handlers 
// 2 ways  1. from request obj and 2. from headers() method
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const HeaderList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(HeaderList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      'Content-type':'text/html'
    }
  });
}
