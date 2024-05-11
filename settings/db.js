import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionDB = async () => {
  try {
    await connect(process.env.DB_MONGO);
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectionDB;

// Made by Jhair Paris (jhairparis.com)