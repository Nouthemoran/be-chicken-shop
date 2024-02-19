import express from 'express';
import { 
    getUsers,
 } from '../controllers/CustomerController.js'; 

const router = express.Router();


router.get('/list', getUsers);

export default router;