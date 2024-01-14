import express from "express";
import dotenv from "dotenv";

dotenv.config();

import { connectDB } from "./config/db.config.js";

const app = express();

const port = process.env.PORT;

// console.log(port);

app.listen(port, async () => {
  await connectDB();
  console.info(`Server running on port: ${port}`);
});
