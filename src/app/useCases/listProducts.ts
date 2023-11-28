import { product } from "../models/Product";

export async function listProducts(ctx: any, next: any) {
  ctx.body = { response: product };
  await next();
}
