import { RemVariants } from "../../types/common";

export type MarginXY = {
  x?: RemVariants;
  y?: RemVariants;
};

export type MarginSides = {
  t?: RemVariants;
  r?: RemVariants;
  b?: RemVariants;
  l?: RemVariants;
};

export type MarginVariants = RemVariants | MarginXY | MarginSides;

export class Margin {
  private static instance: Map<RemVariants | "auto", string> = new Map<
    RemVariants | "auto",
    string
  >([
    [0, "m-0"],
    [0.5, "m-0.5"],
    [1, "m-1"],
    [1.5, "m-1.5"],
    [2, "m-2"],
    [2.5, "m-2.5"],
    [3, "m-3"],
    [3.5, "m-3.5"],
    [4, "m-4"],
    [5, "m-5"],
    [6, "m-6"],
    [7, "m-7"],
    [8, "m-8"],
    [9, "m-9"],
    [10, "m-10"],
    [11, "m-11"],
    [12, "m-12"],
    [14, "m-14"],
    [16, "m-16"],
    [18, "m-18"],
    [20, "m-20"],
    [24, "m-24"],
    [28, "m-28"],
    [32, "m-32"],
    [36, "m-36"],
    [40, "m-40"],
    [48, "m-48"],
    [52, "m-52"],
    [56, "m-56"],
    [60, "m-60"],
    [64, "m-64"],
    [72, "m-72"],
    [80, "m-80"],
    [96, "m-96"],
    ["auto", "m-auto"],
  ]);

  private constructor() {}

  private static isMarginXY(m: MarginVariants): m is MarginXY {
    return typeof m === "object" && "x" in m && "y" in m;
  }

  private static isMarginSides(m: MarginVariants): m is MarginSides {
    return (
      typeof m === "object" && "t" in m && "r" in m && "b" in m && "l" in m
    );
  }

  public static get(m: MarginVariants) {
    if (typeof m === "number") {
      return this.instance.get(m);
    } else if (this.isMarginXY(m)) {
      return `${m.x != null && MarginX.get(m.x)} ${
        m.y != null && MarginY.get(m.y)
      }`;
    } else if (this.isMarginSides(m)) {
      return `${m.t != null && MarginT.get(m.t)} ${
        m.r != null && MarginR.get(m.r)
      } ${m.b != null && MarginB.get(m.b)} ${m.l != null && MarginL.get(m.l)}`;
    } else {
      return this.instance.get("auto");
    }
  }
}

class MarginX {
  private static instance: Map<RemVariants | "auto", string> = new Map<
    RemVariants | "auto",
    string
  >([
    [0, "mx-0"],
    [0.5, "mx-0.5"],
    [1, "mx-1"],
    [1.5, "mx-1.5"],
    [2, "mx-2"],
    [2.5, "mx-2.5"],
    [3, "mx-3"],
    [3.5, "mx-3.5"],
    [4, "mx-4"],
    [5, "mx-5"],
    [6, "mx-6"],
    [7, "mx-7"],
    [8, "mx-8"],
    [9, "mx-9"],
    [10, "mx-10"],
    [11, "mx-11"],
    [12, "mx-12"],
    [14, "mx-14"],
    [16, "mx-16"],
    [18, "mx-18"],
    [20, "mx-20"],
    [24, "mx-24"],
    [28, "mx-28"],
    [32, "mx-32"],
    [36, "mx-36"],
    [40, "mx-40"],
    [48, "mx-48"],
    [52, "mx-52"],
    [56, "mx-56"],
    [60, "mx-60"],
    [64, "mx-64"],
    [72, "mx-72"],
    [80, "mx-80"],
    [96, "mx-96"],
    ["auto", "mx-auto"],
  ]);

  private constructor() {}

  public static get(m: RemVariants) {
    return this.instance.get(m);
  }
}

class MarginY {
  private static instance: Map<RemVariants | "auto", string> = new Map<
    RemVariants | "auto",
    string
  >([
    [0, "my-0"],
    [0.5, "my-0.5"],
    [1, "my-1"],
    [1.5, "my-1.5"],
    [2, "my-2"],
    [2.5, "my-2.5"],
    [3, "my-3"],
    [3.5, "my-3.5"],
    [4, "my-4"],
    [5, "my-5"],
    [6, "my-6"],
    [7, "my-7"],
    [8, "my-8"],
    [9, "my-9"],
    [10, "my-10"],
    [11, "my-11"],
    [12, "my-12"],
    [14, "my-14"],
    [16, "my-16"],
    [18, "my-18"],
    [20, "my-20"],
    [24, "my-24"],
    [28, "my-28"],
    [32, "my-32"],
    [36, "my-36"],
    [40, "my-40"],
    [48, "my-48"],
    [52, "my-52"],
    [56, "my-56"],
    [60, "my-60"],
    [64, "my-64"],
    [72, "my-72"],
    [80, "my-80"],
    [96, "my-96"],
    ["auto", "my-auto"],
  ]);

  private constructor() {}

  public static get(m: RemVariants) {
    return this.instance.get(m);
  }
}

class MarginT {
  private static instance: Map<RemVariants | "auto", string> = new Map<
    RemVariants | "auto",
    string
  >([
    [0, "mt-0"],
    [0.5, "mt-0.5"],
    [1, "mt-1"],
    [1.5, "mt-1.5"],
    [2, "mt-2"],
    [2.5, "mt-2.5"],
    [3, "mt-3"],
    [3.5, "mt-3.5"],
    [4, "mt-4"],
    [5, "mt-5"],
    [6, "mt-6"],
    [7, "mt-7"],
    [8, "mt-8"],
    [9, "mt-9"],
    [10, "mt-10"],
    [11, "mt-11"],
    [12, "mt-12"],
    [14, "mt-14"],
    [16, "mt-16"],
    [18, "mt-18"],
    [20, "mt-20"],
    [24, "mt-24"],
    [28, "mt-28"],
    [32, "mt-32"],
    [36, "mt-36"],
    [40, "mt-40"],
    [48, "mt-48"],
    [52, "mt-52"],
    [56, "mt-56"],
    [60, "mt-60"],
    [64, "mt-64"],
    [72, "mt-72"],
    [80, "mt-80"],
    [96, "mt-96"],
    ["auto", "mt-auto"],
  ]);

  private constructor() {}

  public static get(m: RemVariants) {
    return this.instance.get(m);
  }
}

class MarginR {
  private static instance: Map<RemVariants | "auto", string> = new Map<
    RemVariants | "auto",
    string
  >([
    [0, "mr-0"],
    [0.5, "mr-0.5"],
    [1, "mr-1"],
    [1.5, "mr-1.5"],
    [2, "mr-2"],
    [2.5, "mr-2.5"],
    [3, "mr-3"],
    [3.5, "mr-3.5"],
    [4, "mr-4"],
    [5, "mr-5"],
    [6, "mr-6"],
    [7, "mr-7"],
    [8, "mr-8"],
    [9, "mr-9"],
    [10, "mr-10"],
    [11, "mr-11"],
    [12, "mr-12"],
    [14, "mr-14"],
    [16, "mr-16"],
    [18, "mr-18"],
    [20, "mr-20"],
    [24, "mr-24"],
    [28, "mr-28"],
    [32, "mr-32"],
    [36, "mr-36"],
    [40, "mr-40"],
    [48, "mr-48"],
    [52, "mr-52"],
    [56, "mr-56"],
    [60, "mr-60"],
    [64, "mr-64"],
    [72, "mr-72"],
    [80, "mr-80"],
    [96, "mr-96"],
    ["auto", "mr-auto"],
  ]);

  private constructor() {}

  public static get(m: RemVariants) {
    return this.instance.get(m);
  }
}

class MarginB {
  private static instance: Map<RemVariants | "auto", string> = new Map<
    RemVariants | "auto",
    string
  >([
    [0, "mb-0"],
    [0.5, "mb-0.5"],
    [1, "mb-1"],
    [1.5, "mb-1.5"],
    [2, "mb-2"],
    [2.5, "mb-2.5"],
    [3, "mb-3"],
    [3.5, "mb-3.5"],
    [4, "mb-4"],
    [5, "mb-5"],
    [6, "mb-6"],
    [7, "mb-7"],
    [8, "mb-8"],
    [9, "mb-9"],
    [10, "mb-10"],
    [11, "mb-11"],
    [12, "mb-12"],
    [14, "mb-14"],
    [16, "mb-16"],
    [18, "mb-18"],
    [20, "mb-20"],
    [24, "mb-24"],
    [28, "mb-28"],
    [32, "mb-32"],
    [36, "mb-36"],
    [40, "mb-40"],
    [48, "mb-48"],
    [52, "mb-52"],
    [56, "mb-56"],
    [60, "mb-60"],
    [64, "mb-64"],
    [72, "mb-72"],
    [80, "mb-80"],
    [96, "mb-96"],
    ["auto", "mb-auto"],
  ]);

  private constructor() {}

  public static get(m: RemVariants) {
    return this.instance.get(m);
  }
}

class MarginL {
  private static instance: Map<RemVariants | "auto", string> = new Map<
    RemVariants | "auto",
    string
  >([
    [0, "ml-0"],
    [0.5, "ml-0.5"],
    [1, "ml-1"],
    [1.5, "ml-1.5"],
    [2, "ml-2"],
    [2.5, "ml-2.5"],
    [3, "ml-3"],
    [3.5, "ml-3.5"],
    [4, "ml-4"],
    [5, "ml-5"],
    [6, "ml-6"],
    [7, "ml-7"],
    [8, "ml-8"],
    [9, "ml-9"],
    [10, "ml-10"],
    [11, "ml-11"],
    [12, "ml-12"],
    [14, "ml-14"],
    [16, "ml-16"],
    [18, "ml-18"],
    [20, "ml-20"],
    [24, "ml-24"],
    [28, "ml-28"],
    [32, "ml-32"],
    [36, "ml-36"],
    [40, "ml-40"],
    [48, "ml-48"],
    [52, "ml-52"],
    [56, "ml-56"],
    [60, "ml-60"],
    [64, "ml-64"],
    [72, "ml-72"],
    [80, "ml-80"],
    [96, "ml-96"],
    ["auto", "ml-auto"],
  ]);

  private constructor() {}

  public static get(m: RemVariants) {
    return this.instance.get(m);
  }
}
