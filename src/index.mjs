import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from './routes/routes.mjs'

const app = express();
app.use(
  cors({
    origin,
  })
  )
app.use(bodyParser.json());
app.use(routes)

app.listen(3000 || 8888);