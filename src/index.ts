import * as express from "express";
import bodyParser = require("body-parser");

const { PORT = 3022 } = process.env;

const app = express();

app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json({ data: `${Date.now()}` });
});

app.post("/data", (req, res) => {
  res.json({
    body: req.body,
    status: "OK"
  });
});

// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`__RUNNING__ @ ${PORT}`));

export default app;
