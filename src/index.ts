import * as express from "express";

const { PORT = 3022 } = process.env;

const app = express();

app.get("/", (_, res) => {
  res.json({ data: `${Date.now()}` });
});

// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`__RUNNING__ @ ${PORT}`));
