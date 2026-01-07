import { DevExcuseModel } from "./model";

import general from "./_data/general.json";
import science from "./_data/science.json";

import { rand } from "../../helper/number";

const DATA = { general, science } as const;

export abstract class DevExcuseService {
  static randomCategory() {
    const keys = Object.keys(DATA);
    const randIndex = rand(0, keys?.length);
    const category = keys?.[randIndex] ?? "science";

    return category as DevExcuseModel.devExcuseBody["category"];
  }

  static getRandomExcuse({
    category = this.randomCategory(),
  }: DevExcuseModel.devExcuseBody) {
    const datas = DATA?.[category ?? "science"];
    const randIndex = rand(0, datas?.length);
    const data = datas?.[randIndex];

    return data;
  }
}
