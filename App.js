import express from "express";
import expressLayout from "express-ejs-layouts";
import connectDB from "./server/config/db.mjs";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import cors from 'cors'
import https from 'https'
import { verifyToken, isUser } from './server/config/auth.mjs'

const app = express();
const port = 3000 || process.env.PORT;

connectDB();

app.use(
  cors({
    origin: "*", 
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "DELETE"], 
  })
);



app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//configure static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.use(expressLayout);
app.set("layout", "./layouts/home");
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/products"),
]);
app.set("view engine", "ejs");

//setting up routes
import indexRouter from "./server/routes/index.mjs";
app.use("/", indexRouter);
import productsRouter from "./server/routes/products.mjs";
app.use("/products", productsRouter);
import projectsRouter from "./server/routes/projects.mjs";
app.use("/projects", projectsRouter);
import meeRouter from "./server/routes/mee.mjs";
app.use("/mee", meeRouter);


import authRouter from "./server/routes/auth.mjs";
app.use("/auth", authRouter);


app.listen(port, () => {
  console.log(`The Wednesday App listening on port ${port}`);
});
