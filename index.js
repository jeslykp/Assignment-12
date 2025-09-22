import express from "express"
import userRouter from "./routes/userRouter.js"
import { connectDatabase } from "./config/connectDatabase.js";
import dotenv from "dotenv";
dotenv.config();
connectDatabase()

const app = express();

app.use(express.json());
app.use("/api/users",userRouter)



app.listen(process.env.PORT,()=>{
console.log(  `App is running with express${process.env.PORT}`
)
})