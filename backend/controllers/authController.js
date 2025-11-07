import Joi from "joi";
import { success, fail } from "../utils/response.js";
import * as authService from "../services/authService.js";

const signupSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const signup = async (req, res) => {
  const { error } = signupSchema.validate(req.body);
  if (error) return fail(res, 400, error.details[0].message);

  try {
    const user = await authService.createUser(req.body);
    const token = authService.generateToken(user);
    return success(res, 201, {
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    return fail(res, 400, err.message || "Signup failed");
  }
};

export const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return fail(res, 400, error.details[0].message);

  try {
    const user = await authService.authenticate(req.body);
    const token = authService.generateToken(user);
    return success(res, 200, {
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    return fail(res, 400, "Login failed");
  }
};
