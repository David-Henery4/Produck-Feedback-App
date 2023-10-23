


const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY = process.env.DATA_API_KEY;

//////////////////////////////////////////////////////////////

export async function GET(req) {
  const origin = req.headers.get("origin")
  const res = await fetch(DATA_SOURCE_URL)
  const data = await res.json();
  return new Response.json(JSON.stringify(data), {
    headers:{
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json"
    }
  })
}

//////////////////////////////////////////////////////////////

export async function DELETE(req) {
  const {id} = await req.json()
  if (!id) return Response.json({"message": "Todo id needed"})
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });
  return Response.json({"message": `todo ${id} deleted`})
}

//////////////////////////////////////////////////////////////

export async function POST(req) {
  const { userId, title } = await req.json();
  //
  if (!userId || !title) return Response.json({ message: "Missing required data" });
  //
  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId, title, completed: false
    })
  });
  //
  const newTodo = await res.json()
  //
  return Response.json(newTodo);
}

//////////////////////////////////////////////////////////////

export async function PUT(req) {
  const { userId, title, id, completed } = await req.json();
  //
  if (!userId || !title || !id || typeof(completed) !== "boolean")
    return Response.json({ message: "Missing required data" });
  //
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });
  //
  const updatedTodo = await res.json();
  //
  return Response.json(updatedTodo);
}
