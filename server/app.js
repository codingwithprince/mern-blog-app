import express, { urlencoded } from "express";
import web from "./routes/web.js";
import connectDataBase from "./db/connectDataBase.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.port || 3001;
const pass = encodeURIComponent("Princ34hmeD?$@&");
const uri = `mongodb+srv://codingwithprince:${pass}@prince.itq09qk.mongodb.net/blog-app?retryWrites=true&w=majority`;

// setting cors
app.use(cors());

// middleware
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


// setting home routes
app.use("/", web);

// connect database
connectDataBase(uri);

// server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
