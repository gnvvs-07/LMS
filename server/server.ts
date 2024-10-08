import {app} from "./app";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT,()=>{
    if(process.env.PORT){

        console.log("Server is running in the specified port")
    }
    else{
        console.log("Port is not available");
    }
})