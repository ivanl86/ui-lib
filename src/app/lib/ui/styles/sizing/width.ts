import {
  PercentageVariants,
  RemVariants,
  AllSizeVariants,
  SpeicalSizeVariants,
} from "../../types/common";

export type WidthVariants =
  | RemVariants
  | SpeicalSizeVariants
  | PercentageVariants
  | "auto";

export type MaxWidthVariants =
  | RemVariants
  | Omit<AllSizeVariants, "8xl" | "9xl">
  | SpeicalSizeVariants
  | "none"
  | "prose";

export class Width {
  private static instance: Map<WidthVariants, string> = new Map<
    WidthVariants,
    string
  >([
    [0, "w-0"],
    [0.5, "w-0.5"],
    [1, "w-1"],
    [1.5, "w-1.5"],
    [2, "w-2"],
    [2.5, "w-2.5"],
    [3, "w-3"],
    [3.5, "w-3.5"],
    [4, "w-4"],
    [5, "w-5"],
    [6, "w-6"],
    [7, "w-7"],
    [8, "w-8"],
    [9, "w-9"],
    [10, "w-10"],
    [11, "w-11"],
    [12, "w-12"],
    [14, "w-14"],
    [16, "w-16"],
    [18, "w-18"],
    [20, "w-20"],
    [24, "w-24"],
    [28, "w-28"],
    [32, "w-32"],
    [36, "w-36"],
    [40, "w-40"],
    [44, "w-44"],
    [48, "w-48"],
    [52, "w-52"],
    [56, "w-56"],
    [60, "w-60"],
    [64, "w-64"],
    [72, "w-72"],
    [80, "w-80"],
    [96, "w-96"],
    ["1/2", "w-1/2"],
    ["1/3", "w-1/3"],
    ["2/3", "w-2/3"],
    ["1/4", "w-1/4"],
    ["2/4", "w-2/4"],
    ["3/4", "w-3/4"],
    ["1/5", "w-1/5"],
    ["2/5", "w-2/5"],
    ["3/5", "w-3/5"],
    ["4/5", "w-4/5"],
    ["1/6", "w-1/6"],
    ["2/6", "w-2/6"],
    ["3/6", "w-3/6"],
    ["4/6", "w-4/6"],
    ["5/6", "w-5/6"],
    ["1/12", "w-1/12"],
    ["2/12", "w-2/12"],
    ["3/12", "w-3/12"],
    ["4/12", "w-4/12"],
    ["5/12", "w-5/12"],
    ["6/12", "w-6/12"],
    ["7/12", "w-7/12"],
    ["8/12", "w-8/12"],
    ["9/12", "w-9/12"],
    ["10/12", "w-10/12"],
    ["11/12", "w-11/12"],
    ["auto", "w-auto"],
    ["full", "w-full"],
    ["screen", "w-screen"],
    ["min", "w-min"],
    ["max", "w-max"],
    ["fit", "w-fit"],
  ]);

  private static maxInstance: Map<MaxWidthVariants, string> = new Map<
    MaxWidthVariants,
    string
  >([
    [0, "max-w-0"],
    [0.5, "max-w-0.5"],
    [1, "max-w-1"],
    [1.5, "max-w-1.5"],
    [2, "max-w-2"],
    [2.5, "max-w-2.5"],
    [3, "max-w-3"],
    [3.5, "max-w-3.5"],
    [4, "max-w-4"],
    [5, "max-w-5"],
    [6, "max-w-6"],
    [7, "max-w-7"],
    [8, "max-w-8"],
    [9, "max-w-9"],
    [10, "max-w-10"],
    [11, "max-w-11"],
    [12, "max-w-12"],
    [14, "max-w-14"],
    [16, "max-w-16"],
    [18, "max-w-18"],
    [20, "max-w-20"],
    [24, "max-w-24"],
    [28, "max-w-28"],
    [32, "max-w-32"],
    [36, "max-w-36"],
    [40, "max-w-40"],
    [44, "max-w-44"],
    [48, "max-w-48"],
    [52, "max-w-52"],
    [56, "max-w-56"],
    [60, "max-w-60"],
    [64, "max-w-64"],
    [72, "max-w-72"],
    [80, "max-w-80"],
    [96, "max-w-96"],
    ["xs", "max-w-xs"],
    ["sm", "max-w-sm"],
    ["md", "max-w-md"],
    ["lg", "max-w-lg"],
    ["xl", "max-w-xl"],
    ["2xl", "max-w-2xl"],
    ["3xl", "max-w-3xl"],
    ["4xl", "max-w-4xl"],
    ["5xl", "max-w-5xl"],
    ["6xl", "max-w-6xl"],
    ["7xl", "max-w-7xl"],
    ["none", "max-w-none"],
    ["full", "max-w-full"],
    ["min", "max-w-min"],
    ["max", "max-w-max"],
    ["fit", "max-w-fit"],
    ["prose", "max-w-prose"],
  ]);

  private constructor() {}

  public static get(w: WidthVariants) {
    return this.instance.get(w);
  }

  public static getMax(w: MaxWidthVariants) {
    return this.maxInstance.get(w);
  }
}
