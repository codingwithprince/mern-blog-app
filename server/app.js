import dotenv from 'dotenv'
dotenv.config()
import express, { urlencoded } from "express";
import web from "./routes/web.js";
import connectDataBase from "./db/connectDataBase.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || '3001';
const url = process.env.DATABASE_URL

// setting cors
app.use(cors());

// middleware
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


// setting home routes
app.use("/", web);

// connect database
connectDataBase(url);

// server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
