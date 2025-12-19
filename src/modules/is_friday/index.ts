import Elysia from "elysia";

import { IsFridayModel } from "./model";
import { IsFridayService } from "./service";

export const IsFridayModule = new Elysia({ prefix: "/is-friday" }).get(
  "/",
  ({ query }) => IsFridayService.isFriday(query),
  {
    query: IsFridayModel.isFridayBody,
  },
);
