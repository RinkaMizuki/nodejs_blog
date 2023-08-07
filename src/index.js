import { engine as handlebars } from "express-handlebars";
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8080;
app.use(morgan("combined"));

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs", // config endpoint file
  })
); // định nghĩa cho template engine bằng lb handlebars

app.set("view engine", "hbs"); //setup lb handlebars cho views

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "resources/views")); //config path views

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
