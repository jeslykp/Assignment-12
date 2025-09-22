import User from "../models/userModel.js";

export const createUserService = async (userDetails) => {
  try {
    const user = new User(userDetails); // ✅ use `new` with Model
    await user.save();

    console.log("user", user);
    return user;
  } catch (error) {
    console.error("userService error:", error.message);
    return false;
  }
};
