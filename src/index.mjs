import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from './routes/routes.mjs'

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE, PUT")
  app.use(cors());
  next();
})
app.use(bodyParser.json());
app.use(routes)

app.listen(8888);