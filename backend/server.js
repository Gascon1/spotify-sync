import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { Router } from 'express';
import { fileURLToPath } from 'url';

// route imports
import callback from './routes/callback.js';
import currentlyPlaying from './routes/currentlyPlaying.js';
import index from './routes/index.js';
import users from './routes/users.js';
import mute from './routes/mute.js';
// app config
const app = express();
const port = process.env.PORT || 5000;
const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

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
router.use('/mute', mute);

// listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
