export type DirectionVariants = "row" | "col" | "row-r" | "col-r";

export class Direction {
  private static instance: Record<DirectionVariants, string> = Object.freeze({
    row: "flex-row",
    col: "flex-col",
    "row-r": "flex-row-reverse",
    "col-r": "flex-col-reverse",
  });

  private constructor() {}

  public static flex(direction: DirectionVariants) {
    return `${this.instance[direction]}`;
  }
}
