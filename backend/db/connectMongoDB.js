import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
