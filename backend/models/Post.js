import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true, trim: true },
    image: { type: String, default: "" }, // store URL only for MVP
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
