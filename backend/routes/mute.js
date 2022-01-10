import { Router } from 'express';
import { spotifyApi } from '../spotifyApi.js';

const router = Router();

router.post('/', (req, res) => {
  const { volume } = req.body;

  spotifyApi
    .setVolume(volume)
    .then((data) => {
      res.status(200).json(data.body);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default router;
