import { Elysia } from "elysia";

import { IsFridayModule } from "./modules/is_friday";

const app = new Elysia().use(IsFridayModule);
//.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export default app;
