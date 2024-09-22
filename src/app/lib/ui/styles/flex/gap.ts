import { RemVariants } from "../../types/common";

export type GapXYVariants = { x?: RemVariants; y?: RemVariants };
export type GapVariants = RemVariants | GapXYVariants;

export class Gap {
  private static instance: Map<RemVariants, string> = new Map<
    RemVariants,
    string
  >([
    [0, "gap-0"],
    [0.5, "gap-0.5"],
    [1, "gap-1"],
    [1.5, "gap-1.5"],
    [2, "gap-2"],
    [2.5, "gap-2.5"],
    [3, "gap-3"],
    [3.5, "gap-3.5"],
    [4, "gap-4"],
    [5, "gap-5"],
    [6, "gap-6"],
    [7, "gap-7"],
    [8, "gap-8"],
    [9, "gap-9"],
    [10, "gap-10"],
    [11, "gap-11"],
    [12, "gap-12"],
    [14, "gap-14"],
    [16, "gap-16"],
    [18, "gap-18"],
    [20, "gap-20"],
    [24, "gap-24"],
    [28, "gap-28"],
    [32, "gap-32"],
    [36, "gap-36"],
    [40, "gap-40"],
    [48, "gap-48"],
    [52, "gap-52"],
    [56, "gap-56"],
    [60, "gap-60"],
    [64, "gap-64"],
    [72, "gap-72"],
    [80, "gap-80"],
    [96, "gap-96"],
  ]);
  private constructor() {}

  private static isGapXY(gap: GapVariants): gap is GapXYVariants {
    return typeof gap === "object" && ("x" in gap || "y" in gap);
  }

  public static get(gap: GapVariants) {
    if (typeof gap === "number") {
      return this.instance.get(gap);
    } else if (this.isGapXY(gap)) {
      return `${gap.x && GapX.get(gap.x)} ${gap.y && GapY.get(gap.y)}`;
    }
    return "";
  }
}

class GapX {
  private static instance: Map<RemVariants, string> = new Map<
    RemVariants,
    string
  >([
    [0, "gap-x-0"],
    [0.5, "gap-x-0.5"],
    [1, "gap-x-1"],
    [1.5, "gap-x-1.5"],
    [2, "gap-x-2"],
    [2.5, "gap-x-2.5"],
    [3, "gap-x-3"],
    [3.5, "gap-x-3.5"],
    [4, "gap-x-4"],
    [5, "gap-x-5"],
    [6, "gap-x-6"],
    [7, "gap-x-7"],
    [8, "gap-x-8"],
    [9, "gap-x-9"],
    [10, "gap-x-10"],
    [11, "gap-x-11"],
    [12, "gap-x-12"],
    [14, "gap-x-14"],
    [16, "gap-x-16"],
    [18, "gap-x-18"],
    [20, "gap-x-20"],
    [24, "gap-x-24"],
    [28, "gap-x-28"],
    [32, "gap-x-32"],
    [36, "gap-x-36"],
    [40, "gap-x-40"],
    [48, "gap-x-48"],
    [52, "gap-x-52"],
    [56, "gap-x-56"],
    [60, "gap-x-60"],
    [64, "gap-x-64"],
    [72, "gap-x-72"],
    [80, "gap-x-80"],
    [96, "gap-x-96"],
  ]);

  private constructor() {}

  public static get(gap: RemVariants) {
    return this.instance.get(gap);
  }
}

class GapY {
  private static instance: Map<RemVariants, string> = new Map<
    RemVariants,
    string
  >([
    [0, "gap-y-0"],
    [0.5, "gap-y-0.5"],
    [1, "gap-y-1"],
    [1.5, "gap-y-1.5"],
    [2, "gap-y-2"],
    [2.5, "gap-y-2.5"],
    [3, "gap-y-3"],
    [3.5, "gap-y-3.5"],
    [4, "gap-y-4"],
    [5, "gap-y-5"],
    [6, "gap-y-6"],
    [7, "gap-y-7"],
    [8, "gap-y-8"],
    [9, "gap-y-9"],
    [10, "gap-y-10"],
    [11, "gap-y-11"],
    [12, "gap-y-12"],
    [14, "gap-y-14"],
    [16, "gap-y-16"],
    [18, "gap-y-18"],
    [20, "gap-y-20"],
    [24, "gap-y-24"],
    [28, "gap-y-28"],
    [32, "gap-y-32"],
    [36, "gap-y-36"],
    [40, "gap-y-40"],
    [48, "gap-y-48"],
    [52, "gap-y-52"],
    [56, "gap-y-56"],
    [60, "gap-y-60"],
    [64, "gap-y-64"],
    [72, "gap-y-72"],
    [80, "gap-y-80"],
    [96, "gap-y-96"],
  ]);

  private constructor() {}

  public static get(gap: RemVariants) {
    return this.instance.get(gap);
  }
}
