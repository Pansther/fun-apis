import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";

import { IsFridayModule } from "./modules/is_friday";
import { DevExcuseModule } from "./modules/dev_excuse";

const app = new Elysia()
  .use(openapi({ path: "/openapi" }))
  .use(IsFridayModule)
  .use(DevExcuseModule)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
