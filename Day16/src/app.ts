import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import multer from 'multer';
import movie_route from "./routes/movie_route"

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array("mg mg"));

mongoose
  .connect(process.env.DATABASE || "")
  .then(() => {
    app.listen(1500, () => console.log(`Server running on port ${PORT}`));
    app.use('/movies', movie_route);
  })

