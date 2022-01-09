import { Router } from 'express';
import { spotifyApi } from '../spotifyApi.js';

const router = Router();

const stateKey = 'spotify_auth_state';

router.get('/', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    console.log(data);
    const { access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    res.cookie(stateKey, state);
    res.redirect('/');
  });
});

export default router;
