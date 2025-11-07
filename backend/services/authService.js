import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const createUser = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");
  const user = await User.create({ name, email, password });
  return user;
};

export const authenticate = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");
  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid credentials");
  return user;
};

export const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};
