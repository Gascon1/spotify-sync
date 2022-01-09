import express from 'express';
import cors from 'cors';
import { Router } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// route imports
import index from './routes/index.js';
import callback from './routes/callback.js';
import currentlyPlaying from './routes/currentlyPlaying.js';
import users from './routes/users.js';

// app config
const app = express();
const port = process.env.PORT || 3000;
const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(cookieParser());
app.use('/api/v1', router);

// development only
app.get('/', (req, res) => {
  res.sendFile(path(__dirname, 'index.html'));
});

// api routes
router.use('/', index);
router.use('/callback', callback);
router.use('/currently-playing', currentlyPlaying);
router.use('/users', users);

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
