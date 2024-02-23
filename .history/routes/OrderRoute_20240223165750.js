import express from 'express';
import { 
    getP,
 } from '../controllers/PController.js'; 

const router = express.Router();


router.get('/P', getP);

export default router;