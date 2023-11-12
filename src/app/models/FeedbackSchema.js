import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const feedbackSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  upvotes: { type: Number, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  upvotedBy: Array,
  comments: [
    {
      id: Number,
      content: String,
      replies: [
        {
          id: Number,
          content: String,
          replyingTo: String,
          user: {
            image: String,
            name: String,
            username: String,
            userColour: String,
            userInitial: String,
          },
        },
      ],
      user: {
        image: String,
        name: String,
        username: String,
        userColour: String,
        userInitial: String,
      },
    },
  ],
});

const productRequests = mongoose.models.productrequests || mongoose.model("productrequests", feedbackSchema)

export default productRequests

