import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import CustomerRoute from "./routes/CustomerRoute.js";
import 
const app = express();

app.use(cors());
app.use(express.json());
app.use(CustomerRoute);
app.use(AdRoute);

try {
    await db.authenticate();
    console.log('database connected..');
} catch (error) {
    console.error(error.message);
}


app.listen(5000, () => console.log('Server jalan..'));