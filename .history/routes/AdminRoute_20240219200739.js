import express from 'express';
import { 
    getUsers,
 } from '../controllers/AdController.js'; 

const router = express.Router();


router.get('/list', getUsers);

export Adrouter;