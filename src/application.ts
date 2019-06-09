import * as express from "express";
import { pingController } from "./controllers/ping";
var cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }),pingController);

export default app;
