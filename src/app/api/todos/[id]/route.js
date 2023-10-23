
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(req, {params: {id}}) {
  // const id = req.url.slice(req.url.lastIndexOf("/") + 1) // gets everything after the slash from the request URL
  //
  // Can use a second param in next.js to get the request argument, insead of slice, it is a object called params, which contains the params passed into the function via the URL. = {params: {id}}
  //
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  //
  const todo = await res.json();
  //
  if (!todo.id) return Response.json({ message: "todo not found" });
  //
  return Response.json(todo);
}
