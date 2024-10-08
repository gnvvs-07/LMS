import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { Request,Response,NextFunction } from "express"
dotenv.config();
export const app = express();
app.use(express.json({limit:"50mb"}));
app.use(cookieParser());
const corsEnable = app.use(cors({
    origin:process.env.ORIGIN
}));

if(!corsEnable){
    console.log("Error in enabling cors please refresh the page");
}
console.log("Cons Enable successful");
// error API calls
app.all("*",(req:Request,res:Response,next:NextFunction)=>{
    const err = new Error("Cannot find the route") as any;
    err.statusCode = 404;
    next(err);
})