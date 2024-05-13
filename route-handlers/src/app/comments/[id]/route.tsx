import { comments } from "../data";

// export async function GET(_request: Request, { params }: { params: { id: string } }) {
//   //find comment requested one
//   const comment = comments.find((comment) => comment.id === parseInt(params.id));
//   //return response to  GET request
//   return Response.json(comment);
// }

//PATCH request :for update data
// export async function PATCH(request: Request, { params }: { params: { id: string } }) {
//   const body = await request.json();
//   const { text } = body;
//   const index = comments.findIndex((comment) => comment.id == parseInt(params.id));
//   comments[index].text = text;
//   return new Response(JSON.stringify(comments));
// }

//DELETE request
// export async function DELETE(request: Request, { params }: { params: { id: string } }) {
//   //find index for delete comment from id
//   const index = comments.findIndex((comment) => comment.id == parseInt(params.id));
//   //   const index =  parseInt(params.id);  -->this will not work as it consider as index nd possible tht id maybe differ from index
//   const deletedCom = comments[index];
//   comments.splice(index, 1);
//   return Response.json(comments);
// }

// ----get req
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const comment = comments.find((comment) => comment.id === parseInt(params.id));
  return Response.json(comment);
}

//for update comment
// export 