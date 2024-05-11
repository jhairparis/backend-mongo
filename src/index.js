import express, { json } from "express";
import cors from "cors";
import connectionDB from "../settings/db.js";
import routesClients from "../routes/index.js";

const app = express();

connectionDB();
app.use(cors());

app.use(json());
app.use("/api/clients", routesClients);

app.get("/", (req, res) => {
  return res.send("✅");
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log("http://localhost:5500");
});

// Made by Jhair Paris (jhairparis.com)
