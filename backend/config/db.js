import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI not set in .env file");
    }

    const conn = await mongoose.connect(uri);

    if (process.env.NODE_ENV !== "production") {
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } else {
      console.log("✅ MongoDB Connected");
    }
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
