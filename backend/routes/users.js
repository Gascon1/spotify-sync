import { Router } from 'express';
import { spotifyApi } from '../spotifyApi.js';

const router = Router();

router.post('/:id', (req, res) => {
  res.status(200).send(`Hello ${req.params.id}`);
});

router.get('/me', (req, res) => {
  spotifyApi.getMe().then((data) => {
    res.status(200).send(data.body);
  });
});

export default router;
