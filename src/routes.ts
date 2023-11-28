import Router from "koa-router";

import { listProducts } from "./app/useCases/listProducts";
import { listProductById } from "./app/useCases/listProductById";
import { createProduct } from "./app/useCases/createProduct";
import { updateProduct } from "./app/useCases/updateProduct";
import { deleteProduct } from "./app/useCases/deleteProduct";

export const router = new Router();

router.get("/product", listProducts);
router.get("/product/:id", listProductById);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
