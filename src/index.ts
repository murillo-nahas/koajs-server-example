import Koa from "koa";
import bodyParser from "koa-bodyparser";
import json from "koa-json";

import { router } from "./routes";

const app = new Koa();

const port = 3000;

app.use(bodyParser());
app.use(json());
app.use(router.routes());

app.listen(port, () => {
  console.log(`🚀 Server is running on port http://localhost:${port}/`);
});
