import { Schema, model } from "mongoose";

const clientSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    id: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);

export default model("Client", clientSchema);

// Made by Jhair Paris (jhairparis.com)
