import { RemVariants } from "../../types/common";

export type SpaceBetweenVariants = RemVariants | "reverse";

export class SpaceBetween {
  private static xInstance: Map<SpaceBetweenVariants, string> = new Map<
    SpaceBetweenVariants,
    string
  >([
    ["reverse", "space-x-reverse"],
    [0, "space-x-0"],
    [0.5, "space-x-0.5"],
    [1, "space-x-1"],
    [1.5, "space-x-1.5"],
    [2, "space-x-2"],
    [2.5, "space-x-2.5"],
    [3, "space-x-3"],
    [3.5, "space-x-3.5"],
    [4, "space-x-4"],
    [5, "space-x-5"],
    [6, "space-x-6"],
    [7, "space-x-7"],
    [8, "space-x-8"],
    [9, "space-x-9"],
    [10, "space-x-10"],
    [11, "space-x-11"],
    [12, "space-x-12"],
    [14, "space-x-14"],
    [16, "space-x-16"],
    [20, "space-x-20"],
    [24, "space-x-24"],
    [28, "space-x-28"],
    [32, "space-x-32"],
    [36, "space-x-36"],
    [40, "space-x-40"],
    [44, "space-x-44"],
    [48, "space-x-48"],
    [52, "space-x-52"],
    [56, "space-x-56"],
    [60, "space-x-60"],
    [64, "space-x-64"],
    [72, "space-x-72"],
    [80, "space-x-80"],
    [96, "space-x-96"],
  ]);
  private static yInstance: Map<SpaceBetweenVariants, string> = new Map<
    SpaceBetweenVariants,
    string
  >([
    ["reverse", "space-y-reverse"],
    [0, "space-y-0"],
    [0.5, "space-y-0.5"],
    [1, "space-y-1"],
    [1.5, "space-y-1.5"],
    [2, "space-y-2"],
    [2.5, "space-y-2.5"],
    [3, "space-y-3"],
    [3.5, "space-y-3.5"],
    [4, "space-y-4"],
    [5, "space-y-5"],
    [6, "space-y-6"],
    [7, "space-y-7"],
    [8, "space-y-8"],
    [9, "space-y-9"],
    [10, "space-y-10"],
    [11, "space-y-11"],
    [12, "space-y-12"],
    [14, "space-y-14"],
    [16, "space-y-16"],
    [20, "space-y-20"],
    [24, "space-y-24"],
    [28, "space-y-28"],
    [32, "space-y-32"],
    [36, "space-y-36"],
    [40, "space-y-40"],
    [44, "space-y-44"],
    [48, "space-y-48"],
    [52, "space-y-52"],
    [56, "space-y-56"],
    [60, "space-y-60"],
    [64, "space-y-64"],
    [72, "space-y-72"],
    [80, "space-y-80"],
    [96, "space-y-96"],
  ]);

  private constructor() {}

  public static x(x: SpaceBetweenVariants) {
    return this.xInstance.get(x);
  }

  public static y(y: SpaceBetweenVariants) {
    return this.yInstance.get(y);
  }
}
