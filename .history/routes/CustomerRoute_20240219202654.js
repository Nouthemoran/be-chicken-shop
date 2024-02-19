import express from 'express';
import { 
    getCustomer,
 } from '../controllers/CustomerController.js'; 

const router = express.Router();


router.get('/usto', getCustomer);

export default router;