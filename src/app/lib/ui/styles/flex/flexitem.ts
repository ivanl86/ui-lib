export type FlexWrapVariants = "wrap" | "nowrap" | "wrap-r";

export class FlexItem {
  private constructor() {}

  static wrap(wrap: FlexWrapVariants) {
    switch (wrap) {
      case "wrap":
        return "flex-wrap";
      case "nowrap":
        return "flex-nowrap";
      case "wrap-r":
        return "flex-wrap-reverse";
    }
  }
}