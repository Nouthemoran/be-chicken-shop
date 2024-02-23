import express from 'express';
import { 
    getOrder,
 } from '../controllers/OrderController.js'; 

const router = express.Router();


router.get('/Order', getOrder);

export default router;