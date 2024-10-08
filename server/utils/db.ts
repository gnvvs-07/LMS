import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const dbURI : string = process.env.MONGO_URI || "";

const dbConnect = async()=>{
    try {
        await mongoose.connect(dbURI).then(()=>console.log("DB connected"))
    } catch (error:any) {
        setTimeout(dbConnect,5000);
        console.log("Error in connection with mongoDB");
    }
}

export default dbConnect;