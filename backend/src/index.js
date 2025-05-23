import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello, world!");
});

app.listen(3003, () => {
  console.log("App is running on PORT 3003");
});
