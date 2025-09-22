import { statusCodes } from "../helpers/userHelpers.js";
import { createUserService } from "../services/userService.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("controller, userlogin")
  return res.status(200).json({
    message: "OK - The request was successful.",
    email,
    password,
  });
}


export const createUser = async (req, res) => {
  try {
    const { name, age, email, password, } = req.body
    console.log(req.body,"============request")
    const response = await createUserService(req.body)
    if(response===false){
      console.log("user creation failed")
    }
  }
  catch (error) {
    console.log("createUser error")
  }
}