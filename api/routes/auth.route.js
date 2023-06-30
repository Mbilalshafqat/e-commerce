import express from 'express';
import { login, register } from '../controllers/auth.controller.js';

// router object
const router = express.Router();

// routing
// REGISTER
router.post('/register', register);

// LOGIN
router.post('/login', login);

export default router;
