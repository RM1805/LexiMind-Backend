import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the databse".bgGreen.black);
    } catch (error) {
        console.log(`MongoDB Database Error ${error}`.bgRed.black);
    }
}

export default connectDB;