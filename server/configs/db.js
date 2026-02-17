import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected Successfully 🚀"),
    );

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI not defined in .env file");
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/greencart`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
