import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.PORT || 6001,  
    MONGO_URL: process.env.MONGO_URL,
}