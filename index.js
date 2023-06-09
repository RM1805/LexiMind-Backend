import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middlewares/errorMiddlewares.js";
import openaiRoutes from "./routes/openaiRoutes.js";


dotenv.config();


connectDB();


const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(errorHandler);



app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", openaiRoutes);





app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port 5000`.bgCyan.black);
});