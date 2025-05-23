import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { app, server } from "./lib/socket.js";
import { connectDB } from "./lib/db.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(authRouter);

app.get("/", (req, res) => {
  res.send("hello, world!");
});

server.listen(PORT, () => {
  console.log("App is running on PORT " + PORT);
  connectDB();
});
