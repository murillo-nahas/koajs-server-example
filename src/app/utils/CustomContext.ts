import { Context } from "koa";

export interface CustomContext extends Context {
  params: {
    id?: string;
  };
}
