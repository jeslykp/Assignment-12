import { statusCodes } from "../helpers/userHelpers.js";

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(statusCodes.BAD_REQUEST.code) 
      .json({ message: "Email and password are required" });
  }

  next();
};
