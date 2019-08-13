// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash';
import { postEnrollByHash } from './hash/enroll';
import { postExpelByHash } from './hash/expel';
import { authenticate } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [ authenticate ], post);

router.get('/:classHash', [ authenticate ], getByHash);
router.put('/:classHash', [ authenticate ], putByHash);
router.delete('/:classHash', [ authenticate ], deleteByHash);

router.post('/:classHash/enroll', [ authenticate ], postEnrollByHash);
router.post('/:classHash/expel', [ authenticate ], postExpelByHash);

export { router as classes };
