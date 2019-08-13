// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash';
import { limiter, validator, authenticate } from '../../utils';

// Schema
import { createUser } from '../../schemas';

export const router = express.Router();

router.get('/', [ authenticate, limiter(2, 60 * 1000) ], get);
router.post('/', [ validator(createUser) ], post);

router.get('/:userHash', [ authenticate ], getByHash);
router.put('/:userHash', [ authenticate ], putByHash);
router.delete('/:userHash', [ authenticate ], deleteByHash);

export { router as users };
