import {
  PercentageVariants,
  RemVariants,
  SpeicalSizeVariants,
} from "../../types/common";

export type HeightVariants =
  | RemVariants
  | PercentageVariants
  | SpeicalSizeVariants
  | "auto";

export type MaxHeightVariants = RemVariants | SpeicalSizeVariants | "none";

export class Height {
  private static instance: Map<HeightVariants, string> = new Map<
    HeightVariants,
    string
  >([
    [0, "h-0"],
    [0.5, "h-0.5"],
    [1, "h-1"],
    [1.5, "h-1.5"],
    [2, "h-2"],
    [2.5, "h-2.5"],
    [3, "h-3"],
    [3.5, "h-3.5"],
    [4, "h-4"],
    [5, "h-5"],
    [6, "h-6"],
    [7, "h-7"],
    [8, "h-8"],
    [9, "h-9"],
    [10, "h-10"],
    [11, "h-11"],
    [12, "h-12"],
    [14, "h-14"],
    [16, "h-16"],
    [18, "h-18"],
    [20, "h-20"],
    [24, "h-24"],
    [28, "h-28"],
    [32, "h-32"],
    [36, "h-36"],
    [40, "h-40"],
    [44, "h-44"],
    [48, "h-48"],
    [52, "h-52"],
    [56, "h-56"],
    [60, "h-60"],
    [64, "h-64"],
    [72, "h-72"],
    [80, "h-80"],
    [96, "h-96"],
    ["1/2", "h-1/2"],
    ["1/3", "h-1/3"],
    ["2/3", "h-2/3"],
    ["1/4", "h-1/4"],
    ["2/4", "h-2/4"],
    ["3/4", "h-3/4"],
    ["1/5", "h-1/5"],
    ["2/5", "h-2/5"],
    ["3/5", "h-3/5"],
    ["4/5", "h-4/5"],
    ["1/6", "h-1/6"],
    ["2/6", "h-2/6"],
    ["3/6", "h-3/6"],
    ["4/6", "h-4/6"],
    ["5/6", "h-5/6"],
    ["1/12", "h-1/12"],
    ["2/12", "h-2/12"],
    ["3/12", "h-3/12"],
    ["4/12", "h-4/12"],
    ["5/12", "h-5/12"],
    ["6/12", "h-6/12"],
    ["7/12", "h-7/12"],
    ["8/12", "h-8/12"],
    ["9/12", "h-9/12"],
    ["10/12", "h-10/12"],
    ["11/12", "h-11/12"],
    ["auto", "h-auto"],
    ["full", "h-full"],
    ["screen", "h-screen"],
    ["min", "h-min"],
    ["max", "h-max"],
    ["fit", "h-fit"],
  ]);

  private static maxInstance: Map<MaxHeightVariants, string> = new Map<
    MaxHeightVariants,
    string
  >([
    [0, "max-h-0"],
    [0.5, "max-h-0.5"],
    [1, "max-h-1"],
    [1.5, "max-h-1.5"],
    [2, "max-h-2"],
    [2.5, "max-h-2.5"],
    [3, "max-h-3"],
    [3.5, "max-h-3.5"],
    [4, "max-h-4"],
    [5, "max-h-5"],
    [6, "max-h-6"],
    [7, "max-h-7"],
    [8, "max-h-8"],
    [9, "max-h-9"],
    [10, "max-h-10"],
    [11, "max-h-11"],
    [12, "max-h-12"],
    [14, "max-h-14"],
    [16, "max-h-16"],
    [18, "max-h-18"],
    [20, "max-h-20"],
    [24, "max-h-24"],
    [28, "max-h-28"],
    [32, "max-h-32"],
    [36, "max-h-36"],
    [40, "max-h-40"],
    [48, "max-h-48"],
    [52, "max-h-52"],
    [56, "max-h-56"],
    [60, "max-h-60"],
    [64, "max-h-64"],
    [72, "max-h-72"],
    [80, "max-h-80"],
    [96, "max-h-96"],
    ["none", "max-h-none"],
    ["full", "max-h-full"],
    ["screen", "max-h-screen"],
    ["min", "max-h-min"],
    ["max", "max-h-max"],
    ["fit", "max-h-fit"],
  ]);

  private constructor() {}

  public static get(h: HeightVariants) {
    return this.instance.get(h);
  }

  public static getMax(h: MaxHeightVariants) {
    return this.maxInstance.get(h);
  }
}
