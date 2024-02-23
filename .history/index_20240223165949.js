import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/Database.js";
import CustomerRoute from "./routes/CustomerRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import 

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());
app.use(CustomerRoute);
app.use(AdminRoute);
app.use(MakananRoute);

try {
    await db.authenticate();
    console.log('database connected..');
} catch (error) {
    console.error(error);
}


app.listen(5000, () => console.log('Server jalan..'));