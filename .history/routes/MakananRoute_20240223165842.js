import express from 'express';
import { 
    getMakanan,
 } from '../controllers/MakananController.js'; 

const router = express.Router();


router.get('/Makanan', getMakanan);

export default router;