import mongoose from "mongoose";
import CONFIG from "../config/config.js";
import logger from "../logging/logger.js";
import User from "../models/User.js";
import Post from "../models/Post.js";
import { users, posts } from "../data/index.js";

function connectToDb() {
    mongoose.set("strictQuery", false);
    mongoose.connect(CONFIG.MONGO_URL);

    mongoose.connection.on("connected", () => {
        logger.info("Mongodb connected successfully!");
        // User.insertMany(users);
        // Post.insertMany(posts);
    });

    mongoose.connection.on("error", (err) => {
        logger.error(err);
    });
    
    
}

export default connectToDb;