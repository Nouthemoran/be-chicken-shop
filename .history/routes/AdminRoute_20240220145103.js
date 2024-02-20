import express from 'express';
import { 
    getUsers, register
 } from '../controllers/AdminController.js'; 

const router = express.Router();


router.get('/users', getUsers);
router.post('/register', getUsers);

export default router;