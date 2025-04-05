import 'dotenv/config';
import express from 'express';
import expressLayout from 'express-ejs-layouts';
import connectDB from './server/config/db.mjs';

const app = express();
const port = 3000 || process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/home');
app.set('view engine', 'ejs');

//setting up routes
import router from './server/routes/index.mjs';
app.use('/', router);

import usersRouter from "./server/routes/users.mjs";
import productsRouter from "./server/routes/products.mjs";
import projectsRouter from "./server/routes/projects.mjs";
import meeRouter from "./server/routes/mee.mjs";

app.use("/products", productsRouter);
app.use("/projects", projectsRouter);
app.use("/users", usersRouter);
app.use("/mee", meeRouter);

app.get('', (req, res) => {
  res.status(404).send("There was a problem retrieving the resources you requested")
})

app.listen(port, () => {
  console.log(`The Wednesday App listening on port ${port}`)
});