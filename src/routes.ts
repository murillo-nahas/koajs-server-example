import Router from "koa-router";

export const router = new Router();

router.get("/product", (ctx: any, next: any) => {
  ctx.body = "Hello World!";
});
