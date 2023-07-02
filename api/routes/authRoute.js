import express from 'express';
import { login, register, test } from '../controllers/authController.js';
import { isAdmin, verifyToken } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// routing
// REGISTER
router.post('/register', register);

// LOGIN
router.post('/login', login);

// test router
router.get('/test', verifyToken, isAdmin, test);

export default router;
