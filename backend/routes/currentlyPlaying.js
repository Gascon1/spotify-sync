import { Router } from 'express';
import { spotifyApi } from '../spotifyApi.js';

const router = Router();

router.get('/', (req, res) => {
  spotifyApi
    .getMyCurrentPlayingTrack()
    .then((data) => {
      res.status(200).json(data.body);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default router;
