import express from 'express';
import { 
    get,
 } from '../controllers/Controller.js'; 

const router = express.Router();


router.get('/', get);

export default router;