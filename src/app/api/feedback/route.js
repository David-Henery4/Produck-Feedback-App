import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("main-product-feedback")
    const collection = db.collection("product-feedbacks");
    const findMainList = await collection.find("productRequests")
    // const allFeedbackList = await db
    //   .collection("product-feedbacks")
    //   .find("productRequests")
    //   .toArray();
    return Response.json({
      // allFeedbackList,
      findMainList,
      headers:{
        status: 200,
        "message": "success"
      }
    })
  } catch (error) {
    console.log(error)
  }
}


