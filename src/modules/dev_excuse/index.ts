import Elysia from "elysia";

import { DevExcuseModel } from "./model";
import { DevExcuseService } from "./service";

export const DevExcuseModule = new Elysia({ prefix: "/dev-excuse" }).get(
  "/",
  ({ query }) => DevExcuseService.getRandomExcuse(query),
  {
    query: DevExcuseModel.devExcuseBody,
  },
);
