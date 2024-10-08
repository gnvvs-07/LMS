import { app } from "./app";
import dotenv from "dotenv";
import dbConnect from "./utils/db";
dotenv.config();

app.listen(process.env.PORT, () => {
  if (process.env.PORT) {
    console.log("Server is running in the specified port");
    dbConnect();
  } else {
    console.log("Port is not available");
  }
});
