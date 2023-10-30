import productRequests from "@/app/models/FeedbackSchema";
import { NextResponse } from "next/server";


/**
 * Gets a single feedback item from MongoDB by ID.
 * @param {Request} req - The HTTP request object.
 * @param {Object} param1 - The object containing URL parameters.
 * @param {string} param1.id - The ID of the feedback item to retrieve.
 * @returns {Response} The HTTP response containing the feedback item or an error message.
 */
export async function GET(req, { params: { id } }) {
  try {
    // Attempt to retrieve the feedback item with the specified ID
    const singleFeedback = await productRequests.findOne({ id: id }).exec();
    //
    return NextResponse.json(
      { message: "Success", data: singleFeedback },
      { status: 201 }
    );
  } catch (error) {
    //
    return NextResponse.json(
      { message: "GET feedback failed", error },
      { status: 500 }
    );
  }
}

/**
 * Deletes a product feedback item from MongoDB by ID.
 * @param {Request} req - The HTTP request object.
 * @param {Object} param1 - The object containing URL parameters.
 * @param {string} param1.id - The ID of the feedback item to delete.
 * @returns {Response} The HTTP response indicating the success or failure of the deletion.
 */
export async function DELETE (req, {params : {id}}){
  try {
    // Attempt to find and delete the feedback item with the specified ID
    await productRequests.findOneAndDelete({ id: id });
    //
    return NextResponse.json(
      { message: "Feedback deleted successfully" },
      { status: 201 }
    );
  } catch (error) {
    //
    return NextResponse.json({message: "Failed to delete", error}, {status: 500})
  }
}

/**
 * Updates a product feedback item in MongoDB by ID.
 * @param {Request} req - The HTTP request object containing the updated feedback data.
 * @param {Object} param1 - The object containing URL parameters.
 * @param {string} param1.id - The ID of the feedback item to update.
 * @returns {Response} The HTTP response indicating the success or failure of the update.
 */
export async function PUT (req, {params: {id}}){
  try {
    // Parse the request body as JSON to extract the updated feedback data.
    const body = await req.json();
    // console.log(body)
    const updatedFeedbackData = body.formData;

    // Update the feedback item with the specified ID using the provided data.
    const newData = await productRequests.findOneAndUpdate(
      { id: id },
      { ...updatedFeedbackData }, {
        new: true
      }
    );
    // console.log(newData)
    //
    return NextResponse.json(
      { message: "Feedback updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    // console.log(error)
    return NextResponse.json({message: "Failed to update", error}, {status: 500})
  }
}