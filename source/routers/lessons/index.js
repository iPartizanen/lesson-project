// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash';
import { postAddKeynote } from './hash/keynotes';
import { getKeynoteByHash, deleteKeynoteByHash } from './hash/keynotes/hash';
import { postAddVideo } from './hash/videos';
import { getVideoByHash, deleteVideoByHash } from './hash/videos/hash';
import { authenticate } from '../../utils';

export const router = express.Router();

router.get('/', get);
router.post('/', [ authenticate ], post);

router.get('/:lessonHash', [ authenticate ], getByHash);
router.put('/:lessonHash', [ authenticate ], putByHash);
router.delete('/:lessonHash', [ authenticate ], deleteByHash);

router.post('/:lessonHash/keynotes', [ authenticate ], postAddKeynote);

router.get('/:lessonHash/keynotes/:keynoteHash', [ authenticate ], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', [ authenticate ], deleteKeynoteByHash);

router.post('/:lessonHash/videos', [ authenticate ], postAddVideo);

router.get('/:lessonHash/videos/:videoHash', [ authenticate ], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [ authenticate ], deleteVideoByHash);

export { router as lessons };
