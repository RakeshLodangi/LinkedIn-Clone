import Joi from "joi";
import { success, fail } from "../utils/response.js";
import * as postService from "../services/postService.js";

const postSchema = Joi.object({
  content: Joi.string().min(1).max(2000).required(),
  image: Joi.string().uri().allow("", null),
});

export const createPost = async (req, res) => {
  const { error } = postSchema.validate(req.body);
  if (error) return fail(res, 400, error.details[0].message);

  try {
    const post = await postService.createPost({
      userId: req.user._id,
      content: req.body.content,
      image: req.body.image || "",
    });
    return success(res, 201, post);
  } catch (err) {
    return fail(res, 500, err.message || "Could not create post");
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    return success(res, 200, posts);
  } catch (err) {
    return fail(res, 500, "Could not fetch posts");
  }
};
