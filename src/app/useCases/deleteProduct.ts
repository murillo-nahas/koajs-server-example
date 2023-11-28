import { Next } from "koa";

import { CustomContext } from "../utils/CustomContext";
import { product } from "../models/Product";

export async function deleteProduct(ctx: CustomContext, next: Next) {
  const routerParam = ctx.params.id;

  if (!routerParam) {
    ctx.status = 400;
    ctx.body = { error: "ID parameter is missing" };
    return;
  }

  const index = product.findIndex((el) => el.id === parseInt(routerParam, 10));

  if (index !== -1) {
    const deletedProduct = product.splice(index, 1)[0];
    ctx.status = 204;
    ctx.body = {
      response: deletedProduct,
      message: "Product deleted successfully",
    };
    return;
  }

  ctx.status = 404;
  ctx.body = {
    error: "Product not found",
  };

  await next();
}
