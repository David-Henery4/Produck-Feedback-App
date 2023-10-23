

export async function GET(req) {
  const {searchParams} = new URL(req.url)
  // const name = searchParams.get("name")
  // const instrument = searchParams.get("instrument")
  //
  const obj = Object.fromEntries(searchParams.entries())
  //
  return Response.json(obj)
  // return Response.json({name, instrument})
}
