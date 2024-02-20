import express from 'express';
import { 
    getUsers,
 } from '../controllers/AdminController.js'; 

const router = express.Router();


router.get('/users', getUsers);
router.get('/re', getUsers);

export default router;