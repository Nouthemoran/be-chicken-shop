import express from "express";
import doten
import cors from "cors";
import db from "./config/Database.js";
import CustomerRoute from "./routes/CustomerRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(CustomerRoute);
app.use(AdminRoute);

try {
    await db.authenticate();
    console.log('database connected..');
} catch (error) {
    console.error(error);
}


app.listen(5000, () => console.log('Server jalan..'));