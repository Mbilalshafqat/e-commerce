import express from 'express';
import { register } from '../controllers/auth.controller.js';

// router object
const router = express.Router();

// routing
// REGISTER
router.post('/register', register);

export default router;
