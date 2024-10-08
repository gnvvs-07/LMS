import { Redis } from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log("Redis connection successful");
    return process.env.REDIS_URL;
  }
  else{
    throw new Error("Error in connecting redis")
  }
};
export const redis = new Redis(redisClient());
