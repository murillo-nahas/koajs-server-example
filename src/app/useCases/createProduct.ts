import { Context, Next } from "koa";

import { product } from "./../models/Product";

export async function createProduct(ctx: Context, next: Next) {
  const requestBody = ctx.request.body;

  if (!requestBody) {
    ctx.status = 400;
    ctx.body = { error: "Product is required" };
    return;
  }

  product.push(requestBody);

  ctx.status = 201;
  ctx.body = { response: requestBody, message: "Product created successfully" };

  await next();
}
