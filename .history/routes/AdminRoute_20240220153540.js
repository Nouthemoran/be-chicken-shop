import express from 'express';
import { 
    getUsers, register
 } from '../controllers/AdminController.js'; 

const router = express.Router();


router.get('/users', getUsers);
router.post('/users', register);
router.post('/users', register);

export default router;