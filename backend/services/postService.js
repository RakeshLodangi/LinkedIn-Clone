import Post from "../models/Post.js";

export const createPost = async ({ userId, content, image }) => {
  const post = await Post.create({ user: userId, content, image });
  return post;
};

export const getAllPosts = async () => {
  return Post.find().populate("user", "name email bio").sort({ createdAt: -1 });
};
