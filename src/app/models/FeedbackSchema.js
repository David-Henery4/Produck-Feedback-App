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
  comments: [
    {
      id: Number,
      content: String,
      user: {
        image: String,
        name: String,
        username: String,
      },
    },
  ],
});

const productRequests = mongoose.models.productrequests || mongoose.model("productrequests", feedbackSchema)

export default productRequests

