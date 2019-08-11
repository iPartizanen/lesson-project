// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash';
import { postEnrollByHash } from './hash/enroll';
import { postExpelByHash } from './hash/expel';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:classHash', getByHash);
router.put('/:classHash', putByHash);
router.delete('/:classHash', deleteByHash);

router.post('/:classHash/enroll', postEnrollByHash);
router.post('/:classHash/expel', postExpelByHash);

export { router as classes };
