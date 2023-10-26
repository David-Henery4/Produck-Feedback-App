import productRequests from "@/app/models/FeedbackSchema";
import { NextResponse } from "next/server";


/**
 * Retrieves all product feedback items from MongoDB.
 * @returns {Response} The HTTP response containing all feedback items or an error message.
 */
export async function GET() {
  try {
    // Retrieve all feedback items from the database.
    const allFeedback = await productRequests.find({});
    //
    return NextResponse.json(
      { message: "Success", data: allFeedback },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "GET feedback failed", error },
      { status: 500 }
    );
  }
}

/**
 * Creates a new product feedback item in MongoDB.
 * @param {Request} req - The HTTP request object containing the new feedback data.
 * @returns {Response} The HTTP response indicating the success or failure of the operation.
 */
export async function POST (req) {
  try {
    // Parse the request body as JSON to extract the new feedback data.
    const body = await req.json();
    const feedbackData = body.formData;

    // Create a new feedback item using the provided data.
    await productRequests.create(feedbackData);
    //
    return NextResponse.json({ message: "Data Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({message: "Post FAILED", error}, {status: 500})
  }
}

