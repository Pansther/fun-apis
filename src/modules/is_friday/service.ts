import dayjs from "dayjs";

import { IsFridayModel } from "./model";

const FRIDAY_DAY = 5;

export abstract class IsFridayService {
  static isFriday({ date }: IsFridayModel.isFridayBody) {
    let targetDate = dayjs(date);

    if (!targetDate || !targetDate?.isValid()) {
      targetDate = dayjs();
    }

    return {
      result: targetDate?.day() === FRIDAY_DAY,
    };
  }
}
