import { t } from "elysia";

export namespace IsFridayModel {
  export const isFridayBody = t.Object({
    date: t.Optional(
      t.Date({
        default: new Date(),
        error: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          message: "Invalid Date",
        },
      }),
    ),
  });
  export type isFridayBody = typeof isFridayBody.static;
}
