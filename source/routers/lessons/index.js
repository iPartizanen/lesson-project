// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash';
import { postAddKeynote } from './hash/keynotes';
import { getKeynoteByHash, deleteKeynoteByHash } from './hash/keynotes/hash';
import { postAddVideo } from './hash/videos';
import { getVideoByHash, deleteVideoByHash } from './hash/videos/hash';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash', getByHash);
router.put('/:lessonHash', putByHash);
router.delete('/:lessonHash', deleteByHash);

router.post('/:lessonHash/keynotes', postAddKeynote);

router.get('/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', deleteKeynoteByHash);

router.post('/:lessonHash/videos', postAddVideo);

router.get('/:lessonHash/videos/:videoHash', getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', deleteVideoByHash);

export { router as lessons };
