import express from 'express';
import { 
    getUsers,
 } from '../controllers/Controller.js'; 

const router = express.Router();


router.get('/list', getUsers);

export router;