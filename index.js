import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/health-check", (req, res) => {
  res.send("Health Check");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
