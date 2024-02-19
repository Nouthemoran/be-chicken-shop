import express from "express";
import cors from "cors";
import CustomerRoute from "./routes/CustomerRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CustomerRoute);

try {

} catch (error) {
    cons
}


app.listen(5000, () => console.log('Server jalan..'));