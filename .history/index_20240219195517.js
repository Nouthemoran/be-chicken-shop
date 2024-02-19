import express from "express";
import cors from "cors";
import CustomerRoute from "./routes/CustomerRoute.js";
import db from "./config/";
const app = express();
app.use(cors());
app.use(express.json());
app.use(CustomerRoute);

try {
    await db
} catch (error) {
    console.error(error.message);
}


app.listen(5000, () => console.log('Server jalan..'));