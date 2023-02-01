const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userRouter = require('./src/Routes/userRouter');
const descriptionRouter = require('./src/Routes/descriptionRouter');
const genresRouter = require('./src/Routes/genresRouter');
const moviesRouter = require('./src/Routes/moviesRouter');
const favoritesRouter = require('./src/Routes/favoritesRouter');
const reviewsRouter = require('./src/Routes/reviewsRouter');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: 'user_sid',
    secret: 'test',
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }),
);
app.use('/film', descriptionRouter);
app.use('/', userRouter);
app.use('/genres', genresRouter);
app.use('/movies', moviesRouter);
app.use('/favorite', favoritesRouter);
app.use('/reviews', reviewsRouter);
app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
