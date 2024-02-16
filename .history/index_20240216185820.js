import express from "express";
import cors from "cors";
// import SppRoute from "./routes/SppRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
// app.use(SppRoute);


app.listen(5000, () => console.log('Server jalan..'));