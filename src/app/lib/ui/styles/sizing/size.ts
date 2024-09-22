import {
  PercentageVariants,
  RemVariants,
  SpeicalSizeVariants,
} from "../../types/common";

export type SizeVariants =
  | RemVariants
  | PercentageVariants
  | Omit<SpeicalSizeVariants, "screen">
  | "auto";

export class Size {
  private static instance: Map<SizeVariants, string> = new Map<
    SizeVariants,
    string
  >([
    [0, "size-0"],
    [0.5, "size-0.5"],
    [1, "size-1"],
    [1.5, "size-1.5"],
    [2, "size-2"],
    [2.5, "size-2.5"],
    [3, "size-3"],
    [3.5, "size-3.5"],
    [4, "size-4"],
    [5, "size-5"],
    [6, "size-6"],
    [7, "size-7"],
    [8, "size-8"],
    [9, "size-9"],
    [10, "size-10"],
    [11, "size-11"],
    [12, "size-12"],
    [14, "size-14"],
    [16, "size-16"],
    [18, "size-18"],
    [20, "size-20"],
    [24, "size-24"],
    [28, "size-28"],
    [32, "size-32"],
    [36, "size-36"],
    [40, "size-40"],
    [48, "size-48"],
    [52, "size-52"],
    [56, "size-56"],
    [60, "size-60"],
    [64, "size-64"],
    [72, "size-72"],
    [80, "size-80"],
    [96, "size-96"],
    ["1/2", "size-1/2"],
    ["1/3", "size-1/3"],
    ["2/3", "size-2/3"],
    ["1/4", "size-1/4"],
    ["2/4", "size-2/4"],
    ["3/4", "size-3/4"],
    ["1/5", "size-1/5"],
    ["2/5", "size-2/5"],
    ["3/5", "size-3/5"],
    ["4/5", "size-4/5"],
    ["1/6", "size-1/6"],
    ["2/6", "size-2/6"],
    ["3/6", "size-3/6"],
    ["4/6", "size-4/6"],
    ["5/6", "size-5/6"],
    ["1/12", "size-1/12"],
    ["2/12", "size-2/12"],
    ["3/12", "size-3/12"],
    ["4/12", "size-4/12"],
    ["5/12", "size-5/12"],
    ["6/12", "size-6/12"],
    ["7/12", "size-7/12"],
    ["8/12", "size-8/12"],
    ["9/12", "size-9/12"],
    ["10/12", "size-10/12"],
    ["11/12", "size-11/12"],
    ["auto", "size-auto"],
    ["full", "size-full"],
    ["min", "size-min"],
    ["max", "size-max"],
    ["fit", "size-fit"],
  ]);

  static get(size: SizeVariants) {
    return this.instance.get(size);
  }
}
