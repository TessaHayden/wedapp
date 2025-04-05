import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODBURI);
    console.log(`The Wednesday App Database is connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;