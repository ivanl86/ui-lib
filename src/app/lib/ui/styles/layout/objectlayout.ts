export type FitVariants = "contain" | "cover" | "fill" | "none" | "scale-down";

export class ObjectLayout {
  private static fitInstance: Record<FitVariants, string> = Object.freeze({
    contain: "object-contain",
    cover: "object-cover",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  });

  private constructor() {}

  public static fit(fit: FitVariants) {
    return this.fitInstance[fit];
  }
}
