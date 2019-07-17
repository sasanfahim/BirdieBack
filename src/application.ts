import * as express from "express";
import { result } from "./controllers/ping";
var cors = require("cors");
const app = express();
app.use(cors({ origin: "*" }));

app.get("/hello", (_, res) => {
  res.status(200).json(result);
});
export default app;






