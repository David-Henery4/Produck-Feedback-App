import { NextResponse } from "next/server"

// Allowed Origin List
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];

export function middleware(req) {
  const origin = req.headers.get("origin")
  console.log(origin)
  //
  // Conditional to see if the origin is on the allowed origin list or not
  // if NOT, this conditional gets applied and returns this "400: Bad Request" response
  if (origin && !allowedOrigins.includes(origin)){
    // !origin / || !origin = This blocks api checkers like postman & thunderclient
    // from accessing the api. (Include this production/ maybe don't include in development)
    return new Response(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  //
  console.log("middleware")
  console.log(req.method)
  console.log(req.url)
  //
  return NextResponse.next()
}

export const config = {
  matcher: "/api/:path*",
}
