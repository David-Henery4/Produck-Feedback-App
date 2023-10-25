import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("main-product-feedback");
    const productRequests = db.collection("product-feedbacks");
    const allFeedbackList = await productRequests.distinct("productRequests");
    return NextResponse.json(
      allFeedbackList
      // headers:{
      //   status: 200,
      //   "message": "success"
      // }
    );
  } catch (error) {
    console.log(error);
  }
}
