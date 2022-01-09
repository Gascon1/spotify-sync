import { Router } from 'express';
import { spotifyApi } from '../spotifyApi.js';

const router = Router();

const scopes = [
  'user-read-currently-playing',
  'user-read-email',
  'user-read-playback-state',
  'user-read-private',
];

const stateKey = 'spotify_auth_state';
const state = 'some-state-of-my-choice';

router.get('/', (req, res) => {
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

  res.cookie(stateKey, state);
  res.redirect(authorizeURL);
});

export default router;
