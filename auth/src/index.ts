import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  console.log("Starting authentication(auth) service....");
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // const conn = await mongoose.connect("mongodb://localhost:27017/auth");
    console.log(`Connected to database ${conn.connection.host}`);
  } catch (error) {
    console.log(error, "Connection failed");
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000.......");
  });
};

start();
