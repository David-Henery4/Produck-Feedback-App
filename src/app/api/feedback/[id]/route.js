import clientPromise from "@/lib/mongodb";

export async function GET(req, {params: {id}}) {
  try {
    const client = await clientPromise;
    const db = client.db("main-product-feedback");
    const allFeedbackList = await db
      .collection("product-feedbacks")
      .findOne({});
    const singleItem = allFeedbackList.productRequests.find(
      (feed) => feed.id === id
    );
    //
    return Response.json({
      ...singleItem,
      // headers: {
      //   status: 200,
      //   message: "success",
      // },
    });
  } catch (error) {
    console.log(error);
  }
}
