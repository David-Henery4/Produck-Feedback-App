import { limiter } from "../config/limiter"

export async function GET(req) {
  const origin = req.headers.get("origin")
  //
  const remaining = await limiter.removeTokens(1)
  console.log("remaining: ", remaining)
  //
  if (remaining < 0){
    return new Response(null, {
      status: 429,
      statusText: "To many request",
      headers: {
        "Access-Control-Allow-Origin": origin || "*", // Good to have when working with cors // with thunderclient & postman, a origin won't exist.
        "Content-Type": "text/plain"
      }
    })
  }
  //
  return new Response("Hello")
}

