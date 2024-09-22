import { NumberedPercentageVariants, RemVariants } from "../../types/common";

export type Paddings = RemVariants | NumberedPercentageVariants;

export type PaddingXY = {
  x?: Paddings;
  y?: Paddings;
};

export type PaddingSides = {
  t?: Paddings;
  r?: Paddings;
  b?: Paddings;
  l?: Paddings;
};

export type PaddingVariants = Paddings | PaddingXY | PaddingSides;

export class Padding {
  private static instance: Map<Paddings, string> = new Map<Paddings, string>([
    [0, "p-0"],
    [0.5, "p-0.5"],
    [1, "p-1"],
    [1.5, "p-1.5"],
    [2, "p-2"],
    [2.5, "p-2.5"],
    [3, "p-3"],
    [3.5, "p-3.5"],
    [4, "p-4"],
    [5, "p-5"],
    [6, "p-6"],
    [7, "p-7"],
    [8, "p-8"],
    [9, "p-9"],
    [10, "p-10"],
    [11, "p-11"],
    [12, "p-12"],
    [14, "p-14"],
    [16, "p-16"],
    [18, "p-18"],
    [20, "p-20"],
    [24, "p-24"],
    [28, "p-28"],
    [32, "p-32"],
    [36, "p-36"],
    [40, "p-40"],
    [48, "p-48"],
    [52, "p-52"],
    [56, "p-56"],
    [60, "p-60"],
    [64, "p-64"],
    [72, "p-72"],
    [80, "p-80"],
    [96, "p-96"],
    ["0%", "p-[0%]"],
    ["5%", "p-[5%]"],
    ["10%", "p-[10%]"],
    ["15%", "p-[15%]"],
    ["20%", "p-[20%]"],
    ["25%", "p-[25%]"],
    ["30%", "p-[30%]"],
    ["35%", "p-[35%]"],
    ["40%", "p-[40%]"],
    ["45%", "p-[45%]"],
    ["50%", "p-[50%]"],
    ["55%", "p-[55%]"],
    ["60%", "p-[60%]"],
    ["65%", "p-[65%]"],
    ["70%", "p-[70%]"],
    ["75%", "p-[75%]"],
    ["80%", "p-[80%]"],
    ["85%", "p-[85%]"],
    ["90%", "p-[90%]"],
    ["95%", "p-[95%]"],
    ["100%", "p-[100%]"],
  ]);

  private constructor() {}

  private static isPaddingXY(p: PaddingVariants): p is PaddingXY {
    return typeof p === "object" && "x" in p && "y" in p;
  }

  private static isPaddingSides(p: PaddingVariants): p is PaddingSides {
    return (
      typeof p === "object" && "t" in p && "r" in p && "b" in p && "l" in p
    );
  }

  public static get(p: PaddingVariants) {
    if (typeof p === "number" || typeof p === "string") {
      return `${this.instance.get(p)}`;
    } else if (this.isPaddingXY(p)) {
      return `${p.x != null && PaddingX.get(p.x)} ${
        p.y != null && PaddingY.get(p.y)
      }`;
    } else if (this.isPaddingSides(p)) {
      return `${p.t != null && PaddingTop.get(p.t)} ${
        p.r != null && PaddingRight.get(p.r)
      } ${p.b != null && PaddingBottom.get(p.b)} ${
        p.l != null && PaddingLeft.get(p.l)
      }`;
    }
  }
}

class PaddingX {
  private static instance: Map<Paddings, string> = new Map<Paddings, string>([
    [0, "px-0"],
    [0.5, "px-0.5"],
    [1, "px-1"],
    [1.5, "px-1.5"],
    [2, "px-2"],
    [2.5, "px-2.5"],
    [3, "px-3"],
    [3.5, "px-3.5"],
    [4, "px-4"],
    [5, "px-5"],
    [6, "px-6"],
    [7, "px-7"],
    [8, "px-8"],
    [9, "px-9"],
    [10, "px-10"],
    [11, "px-11"],
    [12, "px-12"],
    [14, "px-14"],
    [16, "px-16"],
    [18, "px-18"],
    [20, "px-20"],
    [24, "px-24"],
    [28, "px-28"],
    [32, "px-32"],
    [36, "px-36"],
    [40, "px-40"],
    [48, "px-48"],
    [52, "px-52"],
    [56, "px-56"],
    [60, "px-60"],
    [64, "px-64"],
    [72, "px-72"],
    [80, "px-80"],
    [96, "px-96"],
    ["0%", "px-[0%]"],
    ["5%", "px-[5%]"],
    ["10%", "px-[10%]"],
    ["15%", "px-[15%]"],
    ["20%", "px-[20%]"],
    ["25%", "px-[25%]"],
    ["30%", "px-[30%]"],
    ["35%", "px-[35%]"],
    ["40%", "px-[40%]"],
    ["45%", "px-[45%]"],
    ["50%", "px-[50%]"],
    ["55%", "px-[55%]"],
    ["60%", "px-[60%]"],
    ["65%", "px-[65%]"],
    ["70%", "px-[70%]"],
    ["75%", "px-[75%]"],
    ["80%", "px-[80%]"],
    ["85%", "px-[85%]"],
    ["90%", "px-[90%]"],
    ["95%", "px-[95%]"],
    ["100%", "px-[100%]"],
  ]);

  private constructor() {}

  public static get(x: Paddings) {
    return this.instance.get(x);
  }
}

class PaddingY {
  private static instance: Map<Paddings, string> = new Map<Paddings, string>([
    [0, "py-0"],
    [0.5, "py-0.5"],
    [1, "py-1"],
    [1.5, "py-1.5"],
    [2, "py-2"],
    [2.5, "py-2.5"],
    [3, "py-3"],
    [3.5, "py-3.5"],
    [4, "py-4"],
    [5, "py-5"],
    [6, "py-6"],
    [7, "py-7"],
    [8, "py-8"],
    [9, "py-9"],
    [10, "py-10"],
    [11, "py-11"],
    [12, "py-12"],
    [14, "py-14"],
    [16, "py-16"],
    [18, "py-18"],
    [20, "py-20"],
    [24, "py-24"],
    [28, "py-28"],
    [32, "py-32"],
    [36, "py-36"],
    [40, "py-40"],
    [48, "py-48"],
    [52, "py-52"],
    [56, "py-56"],
    [60, "py-60"],
    [64, "py-64"],
    [72, "py-72"],
    [80, "py-80"],
    [96, "py-96"],
    ["0%", "py-[0%]"],
    ["5%", "py-[5%]"],
    ["10%", "py-[10%]"],
    ["15%", "py-[15%]"],
    ["20%", "py-[20%]"],
    ["25%", "py-[25%]"],
    ["30%", "py-[30%]"],
    ["35%", "py-[35%]"],
    ["40%", "py-[40%]"],
    ["45%", "py-[45%]"],
    ["50%", "py-[50%]"],
    ["55%", "py-[55%]"],
    ["60%", "py-[60%]"],
    ["65%", "py-[65%]"],
    ["70%", "py-[70%]"],
    ["75%", "py-[75%]"],
    ["80%", "py-[80%]"],
    ["85%", "py-[85%]"],
    ["90%", "py-[90%]"],
    ["95%", "py-[95%]"],
    ["100%", "py-[100%]"],
  ]);

  private constructor() {}

  public static get(y: Paddings) {
    return this.instance.get(y);
  }
}

class PaddingTop {
  private static instance: Map<Paddings, string> = new Map<Paddings, string>([
    [0, "pt-0"],
    [0.5, "pt-0.5"],
    [1, "pt-1"],
    [1.5, "pt-1.5"],
    [2, "pt-2"],
    [2.5, "pt-2.5"],
    [3, "pt-3"],
    [3.5, "pt-3.5"],
    [4, "pt-4"],
    [5, "pt-5"],
    [6, "pt-6"],
    [7, "pt-7"],
    [8, "pt-8"],
    [9, "pt-9"],
    [10, "pt-10"],
    [11, "pt-11"],
    [12, "pt-12"],
    [14, "pt-14"],
    [16, "pt-16"],
    [18, "pt-18"],
    [20, "pt-20"],
    [24, "pt-24"],
    [28, "pt-28"],
    [32, "pt-32"],
    [36, "pt-36"],
    [40, "pt-40"],
    [48, "pt-48"],
    [52, "pt-52"],
    [56, "pt-56"],
    [60, "pt-60"],
    [64, "pt-64"],
    [72, "pt-72"],
    [80, "pt-80"],
    [96, "pt-96"],
    ["0%", "pt-[0%]"],
    ["5%", "pt-[5%]"],
    ["10%", "pt-[10%]"],
    ["15%", "pt-[15%]"],
    ["20%", "pt-[20%]"],
    ["25%", "pt-[25%]"],
    ["30%", "pt-[30%]"],
    ["35%", "pt-[35%]"],
    ["40%", "pt-[40%]"],
    ["45%", "pt-[45%]"],
    ["50%", "pt-[50%]"],
    ["55%", "pt-[55%]"],
    ["60%", "pt-[60%]"],
    ["65%", "pt-[65%]"],
    ["70%", "pt-[70%]"],
    ["75%", "pt-[75%]"],
    ["80%", "pt-[80%]"],
    ["85%", "pt-[85%]"],
    ["90%", "pt-[90%]"],
    ["95%", "pt-[95%]"],
    ["100%", "pt-[100%]"],
  ]);

  private constructor() {}

  public static get(top: Paddings) {
    return this.instance.get(top);
  }
}

class PaddingBottom {
  private static instance: Map<Paddings, string> = new Map<Paddings, string>([
    [0, "pb-0"],
    [0.5, "pb-0.5"],
    [1, "pb-1"],
    [1.5, "pb-1.5"],
    [2, "pb-2"],
    [2.5, "pb-2.5"],
    [3, "pb-3"],
    [3.5, "pb-3.5"],
    [4, "pb-4"],
    [5, "pb-5"],
    [6, "pb-6"],
    [7, "pb-7"],
    [8, "pb-8"],
    [9, "pb-9"],
    [10, "pb-10"],
    [11, "pb-11"],
    [12, "pb-12"],
    [14, "pb-14"],
    [16, "pb-16"],
    [18, "pb-18"],
    [20, "pb-20"],
    [24, "pb-24"],
    [28, "pb-28"],
    [32, "pb-32"],
    [36, "pb-36"],
    [40, "pb-40"],
    [48, "pb-48"],
    [52, "pb-52"],
    [56, "pb-56"],
    [60, "pb-60"],
    [64, "pb-64"],
    [72, "pb-72"],
    [80, "pb-80"],
    [96, "pb-96"],
  ]);

  private constructor() {}

  public static get(bottom: Paddings) {
    return this.instance.get(bottom);
  }
}

class PaddingLeft {
  private static instance: Map<Paddings, string> = new Map<Paddings, string>([
    [0, "pl-0"],
    [0.5, "pl-0.5"],
    [1, "pl-1"],
    [1.5, "pl-1.5"],
    [2, "pl-2"],
    [2.5, "pl-2.5"],
    [3, "pl-3"],
    [3.5, "pl-3.5"],
    [4, "pl-4"],
    [5, "pl-5"],
    [6, "pl-6"],
    [7, "pl-7"],
    [8, "pl-8"],
    [9, "pl-9"],
    [10, "pl-10"],
    [11, "pl-11"],
    [12, "pl-12"],
    [14, "pl-14"],
    [16, "pl-16"],
    [18, "pl-18"],
    [20, "pl-20"],
    [24, "pl-24"],
    [28, "pl-28"],
    [32, "pl-32"],
    [36, "pl-36"],
    [40, "pl-40"],
    [48, "pl-48"],
    [52, "pl-52"],
    [56, "pl-56"],
    [60, "pl-60"],
    [64, "pl-64"],
    [72, "pl-72"],
    [80, "pl-80"],
    [96, "pl-96"],
    ["0%", "pl-[0%]"],
    ["5%", "pl-[5%]"],
    ["10%", "pl-[10%]"],
    ["15%", "pl-[15%]"],
    ["20%", "pl-[20%]"],
    ["25%", "pl-[25%]"],
    ["30%", "pl-[30%]"],
    ["35%", "pl-[35%]"],
    ["40%", "pl-[40%]"],
    ["45%", "pl-[45%]"],
    ["50%", "pl-[50%]"],
    ["55%", "pl-[55%]"],
    ["60%", "pl-[60%]"],
    ["65%", "pl-[65%]"],
    ["70%", "pl-[70%]"],
    ["75%", "pl-[75%]"],
    ["80%", "pl-[80%]"],
    ["85%", "pl-[85%]"],
    ["90%", "pl-[90%]"],
    ["95%", "pl-[95%]"],
    ["100%", "pl-[100%]"],
  ]);

  private constructor() {}

  public static get(left: Paddings) {
    return this.instance.get(left);
  }
}

class PaddingRight {
  private static instance: Map<Paddings, string> = new Map<Paddings, string>([
    [0, "pr-0"],
    [0.5, "pr-0.5"],
    [1, "pr-1"],
    [1.5, "pr-1.5"],
    [2, "pr-2"],
    [2.5, "pr-2.5"],
    [3, "pr-3"],
    [3.5, "pr-3.5"],
    [4, "pr-4"],
    [5, "pr-5"],
    [6, "pr-6"],
    [7, "pr-7"],
    [8, "pr-8"],
    [9, "pr-9"],
    [10, "pr-10"],
    [11, "pr-11"],
    [12, "pr-12"],
    [14, "pr-14"],
    [16, "pr-16"],
    [18, "pr-18"],
    [20, "pr-20"],
    [24, "pr-24"],
    [28, "pr-28"],
    [32, "pr-32"],
    [36, "pr-36"],
    [40, "pr-40"],
    [48, "pr-48"],
    [52, "pr-52"],
    [56, "pr-56"],
    [60, "pr-60"],
    [64, "pr-64"],
    [72, "pr-72"],
    [80, "pr-80"],
    [96, "pr-96"],
    ["0%", "pr-[0%]"],
    ["5%", "pr-[5%]"],
    ["10%", "pr-[10%]"],
    ["15%", "pr-[15%]"],
    ["20%", "pr-[20%]"],
    ["25%", "pr-[25%]"],
    ["30%", "pr-[30%]"],
    ["35%", "pr-[35%]"],
    ["40%", "pr-[40%]"],
    ["45%", "pr-[45%]"],
    ["50%", "pr-[50%]"],
    ["55%", "pr-[55%]"],
    ["60%", "pr-[60%]"],
    ["65%", "pr-[65%]"],
    ["70%", "pr-[70%]"],
    ["75%", "pr-[75%]"],
    ["80%", "pr-[80%]"],
    ["85%", "pr-[85%]"],
    ["90%", "pr-[90%]"],
    ["95%", "pr-[95%]"],
    ["100%", "pr-[100%]"],
  ]);

  private constructor() {}

  public static get(right: Paddings) {
    return this.instance.get(right);
  }
}
