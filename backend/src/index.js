import cors from "cors";
import dotenv from "dotenv";

import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello, world!");
});

server.listen(PORT, () => {
  console.log("App is running on PORT " + PORT);
});
