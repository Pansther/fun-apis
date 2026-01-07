import { t } from "elysia";

export namespace DevExcuseModel {
  export const devExcuseBody = t.Object({
    category: t.Optional(t.Union([t.Literal("general"), t.Literal("science")])),
  });
  export type devExcuseBody = typeof devExcuseBody.static;
}
