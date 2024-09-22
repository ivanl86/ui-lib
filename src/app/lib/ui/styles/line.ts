export type LineNumberVariants = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export class Line {
  private static clampInstance: Record<LineNumberVariants, string> = Object.freeze({
    0: "line-clamp-none",
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
    6: "line-clamp-6",
  })

  private constructor() {}

  public static clamp(clamp: LineNumberVariants) {
    return this.clampInstance[clamp];
  }
}
