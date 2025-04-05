import 'dotenv/config';
import express from 'express';
import expressLayout from 'express-ejs-layouts';
import connectDB from './server/config/db.mjs';
import flash from 'express-flash';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000 || process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configure static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

//flash configuration
app.use(session({
  secret: 'no-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 6000
  }
}));
app.use(flash());

app.use(expressLayout);
app.set('layout', './layouts/home');
app.set('view engine', 'ejs');

//setting up routes
import indexRouter from './server/routes/index.mjs';
app.use('/', indexRouter);
app.use('/signup', indexRouter);
import productsRouter from "./server/routes/products.mjs";
app.use("/products", productsRouter);
import projectsRouter from "./server/routes/projects.mjs";
app.use("/projects", projectsRouter);
import meeRouter from "./server/routes/mee.mjs";
app.use("/mee", meeRouter);

app.get('', (req, res) => {
  res.status(404).send("There was a problem retrieving the resources you requested")
})

app.listen(port, () => {
  console.log(`The Wednesday App listening on port ${port}`)
});