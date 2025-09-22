import mongoose from "mongoose";


 export const connectDatabase = () => {
    try {
        mongoose.connect(process.env.MONGODBURI).then((res) => {
            console.log("Database connected")
        }).catch(
            (err) => {
                console.log(err)
            }
        )
    }
    catch (error) {
        console.log(error)

    }

}
