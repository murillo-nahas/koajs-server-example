import { Next } from "koa";
import { CustomContext } from "../utils/CustomContext";

import { product } from "../models/Product";

export async function updateProduct(ctx: CustomContext, next: Next) {
  const routerParam = ctx.params.id;
  const requestBody = ctx.request.body || {};

  if (!routerParam) {
    ctx.status = 400;
    ctx.body = { error: "Missing ID parameter in the route" };
    return;
  }

  const index = product.findIndex((el) => el.id === parseInt(routerParam, 10));

  if (index !== -1) {
    const updatedProduct = { ...product[index], ...requestBody };
    product[index] = updatedProduct;
    ctx.body = {
      response: updatedProduct,
      message: "Product updated successfully",
    };
    return;
  }

  ctx.status = 404;
  ctx.body = { error: "Product not found" };

  await next();
}
