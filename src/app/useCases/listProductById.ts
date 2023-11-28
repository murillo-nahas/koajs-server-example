import { Next } from "koa";

import { CustomContext } from "../utils/CustomContext";
import { product } from "../models/Product";

export async function listProductById(ctx: CustomContext, next: Next) {
  const routerParam = ctx.params.id;

  if (!routerParam) {
    ctx.status = 400;
    ctx.body = { error: "Missing ID parameter in the route" };
    return;
  }

  const foundProduct = product.find(
    (el) => el.id === parseInt(routerParam, 10)
  );

  if (foundProduct) {
    ctx.body = { response: foundProduct };
    return;
  }

  ctx.status = 404;
  ctx.body = { error: "Product not found" };

  await next();
}
