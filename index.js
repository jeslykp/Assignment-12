import express from "express"
import itemRouter from "./routes/itemRouter.js"
import { connectDatabase } from "./config/connectDatabase.js";
import dotenv from "dotenv";
dotenv.config();
connectDatabase()

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Inventory API is Running");
});

app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Server is healthy" });
});

app.use("/items", itemRouter);


app.listen(process.env.PORT,()=>{
    console.log(  `App is running with express${process.env.PORT}`
    )
    })