import { BasePercentageVariants, RemVariants } from "../../types/common";

export type PositionVariants =
  | "static"
  | "fixed"
  | "absolute"
  | "relative"
  | "sticky";

export type PlacementVariants = RemVariants | BasePercentageVariants | "auto";

export class Position {
  private static topInstance: Map<PlacementVariants, string> = new Map<
    PlacementVariants,
    string
  >([
    [0, "top-0"],
    [0.5, "top-0.5"],
    [1, "top-1"],
    [1.5, "top-1.5"],
    [2, "top-2"],
    [2.5, "top-2.5"],
    [3, "top-3"],
    [3.5, "top-3.5"],
    [4, "top-4"],
    [5, "top-5"],
    [6, "top-6"],
    [7, "top-7"],
    [8, "top-8"],
    [9, "top-9"],
    [10, "top-10"],
    [11, "top-11"],
    [12, "top-12"],
    [14, "top-14"],
    [16, "top-16"],
    [18, "top-18"],
    [20, "top-20"],
    [24, "top-24"],
    [28, "top-28"],
    [32, "top-32"],
    [36, "top-36"],
    [40, "top-40"],
    [44, "top-44"],
    [48, "top-48"],
    [52, "top-52"],
    [56, "top-56"],
    [60, "top-60"],
    [64, "top-64"],
    [72, "top-72"],
    [80, "top-80"],
    [96, "top-96"],
    ["1/2", "top-1/2"],
    ["1/3", "top-1/3"],
    ["2/3", "top-2/3"],
    ["1/4", "top-1/4"],
    ["2/4", "top-2/4"],
    ["3/4", "top-3/4"],
    ["auto", "top-auto"],
  ]);

  private static rightInstance: Map<PlacementVariants, string> = new Map<
    PlacementVariants,
    string
  >([
    [0, "right-0"],
    [0.5, "right-0.5"],
    [1, "right-1"],
    [1.5, "right-1.5"],
    [2, "right-2"],
    [2.5, "right-2.5"],
    [3, "right-3"],
    [3.5, "right-3.5"],
    [4, "right-4"],
    [5, "right-5"],
    [6, "right-6"],
    [7, "right-7"],
    [8, "right-8"],
    [9, "right-9"],
    [10, "right-10"],
    [11, "right-11"],
    [12, "right-12"],
    [14, "right-14"],
    [16, "right-16"],
    [18, "right-18"],
    [20, "right-20"],
    [24, "right-24"],
    [28, "right-28"],
    [32, "right-32"],
    [36, "right-36"],
    [40, "right-40"],
    [44, "right-44"],
    [48, "right-48"],
    [52, "right-52"],
    [56, "right-56"],
    [60, "right-60"],
    [64, "right-64"],
    [72, "right-72"],
    [80, "right-80"],
    [96, "right-96"],
    ["1/2", "right-1/2"],
    ["1/3", "right-1/3"],
    ["2/3", "right-2/3"],
    ["1/4", "right-1/4"],
    ["2/4", "right-2/4"],
    ["3/4", "right-3/4"],
    ["auto", "right-auto"],
  ]);

  private static bottomInstance: Map<PlacementVariants, string> = new Map<
    PlacementVariants,
    string
  >([
    [0, "bottom-0"],
    [0.5, "bottom-0.5"],
    [1, "bottom-1"],
    [1.5, "bottom-1.5"],
    [2, "bottom-2"],
    [2.5, "bottom-2.5"],
    [3, "bottom-3"],
    [3.5, "bottom-3.5"],
    [4, "bottom-4"],
    [5, "bottom-5"],
    [6, "bottom-6"],
    [7, "bottom-7"],
    [8, "bottom-8"],
    [9, "bottom-9"],
    [10, "bottom-10"],
    [11, "bottom-11"],
    [12, "bottom-12"],
    [14, "bottom-14"],
    [16, "bottom-16"],
    [18, "bottom-18"],
    [20, "bottom-20"],
    [24, "bottom-24"],
    [28, "bottom-28"],
    [32, "bottom-32"],
    [36, "bottom-36"],
    [40, "bottom-40"],
    [44, "bottom-44"],
    [48, "bottom-48"],
    [52, "bottom-52"],
    [56, "bottom-56"],
    [60, "bottom-60"],
    [64, "bottom-64"],
    [72, "bottom-72"],
    [80, "bottom-80"],
    [96, "bottom-96"],
    ["1/2", "bottom-1/2"],
    ["1/3", "bottom-1/3"],
    ["2/3", "bottom-2/3"],
    ["1/4", "bottom-1/4"],
    ["2/4", "bottom-2/4"],
    ["3/4", "bottom-3/4"],
    ["auto", "bottom-auto"],
  ]);

  private static leftInstance: Map<PlacementVariants, string> = new Map<
    PlacementVariants,
    string
  >([
    [0, "left-0"],
    [0.5, "left-0.5"],
    [1, "left-1"],
    [1.5, "left-1.5"],
    [2, "left-2"],
    [2.5, "left-2.5"],
    [3, "left-3"],
    [3.5, "left-3.5"],
    [4, "left-4"],
    [5, "left-5"],
    [6, "left-6"],
    [7, "left-7"],
    [8, "left-8"],
    [9, "left-9"],
    [10, "left-10"],
    [11, "left-11"],
    [12, "left-12"],
    [14, "left-14"],
    [16, "left-16"],
    [18, "left-18"],
    [20, "left-20"],
    [24, "left-24"],
    [28, "left-28"],
    [32, "left-32"],
    [36, "left-36"],
    [40, "left-40"],
    [44, "left-44"],
    [48, "left-48"],
    [52, "left-52"],
    [56, "left-56"],
    [60, "left-60"],
    [64, "left-64"],
    [72, "left-72"],
    [80, "left-80"],
    [96, "left-96"],
    ["1/2", "left-1/2"],
    ["1/3", "left-1/3"],
    ["2/3", "left-2/3"],
    ["1/4", "left-1/4"],
    ["2/4", "left-2/4"],
    ["3/4", "left-3/4"],
    ["auto", "left-auto"],
  ]);

  private constructor() {}

  public static top(top: PlacementVariants) {
    return this.topInstance.get(top);
  }

  public static right(right: PlacementVariants) {
    return this.rightInstance.get(right);
  }

  public static bottom(bottom: PlacementVariants) {
    return this.bottomInstance.get(bottom);
  }

  public static left(left: PlacementVariants) {
    return this.leftInstance.get(left);
  }
}
