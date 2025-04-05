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

app.get('', (req, res) => {
  res.status(404).send("There was a problem retrieving the resources you requested")
})

app.listen(port, () => {
  console.log(`The Wednesday App listening on port ${port}`)
});