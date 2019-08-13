// Core
import express from 'express';

// Instruments
import { postLogin, postLogout } from './route';
import { limiter, authenticate } from '../../utils';

export const router = express.Router();

router.post('/login', [ limiter(5, 60 * 1000) ], postLogin);
router.post('/logout', [ authenticate, limiter(5, 60 * 1000) ], postLogout);

export { router as auth };
