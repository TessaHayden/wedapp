import express from "express";
import session from "express-session";
import expressLayout from "express-ejs-layouts";
import connectDB from "./server/config/db.mjs";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";


const app = express();
const port = 3000 || process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, 
      secure: false
    },
  })
);

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
import adminRouter from "./server/routes/adminRoutes.mjs";
app.use("/dashboard", adminRouter);
import productsRouter from "./server/routes/products.mjs";
app.use("/products", productsRouter);
import projectsRouter from "./server/routes/projects.mjs";
app.use("/projects", projectsRouter);
import meeRouter from "./server/routes/mee.mjs";
app.use("/mee", meeRouter);
import cartRouter from "./server/routes/cart.mjs";
app.use("/cart", cartRouter);

app.get("", (req, res) => {
  res
    .status(404)
    .send("There was a problem retrieving the resources you requested");
});

app.listen(port, () => {
  console.log(`The Wednesday App listening on port ${port}`);
});
