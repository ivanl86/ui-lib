export type AspectRatioVariants =
  | "auto"
  | "square" // 1:1
  | "video" // 16:9
  | "4/3"
  | "9/16"
  | "16/10"
  | "21/9";

export class AspectRatio {
  private static instance: Record<AspectRatioVariants, string> = Object.freeze({
    auto: "aspect-auto",
    square: "aspect-square",
    video: "aspect-video",
    "4/3": "aspect-[4/3]",
    "9/16": "aspect-[9/16]",
    "16/10": "aspect-[16/10]",
    "21/9": "aspect-[21/9]",
  });

  private constructor() {}

  static get(variant: AspectRatioVariants) {
    return this.instance[variant];
  }
}
