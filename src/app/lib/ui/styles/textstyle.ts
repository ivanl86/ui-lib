import { BaseColorVariants } from "../types/common";

export type TextAlignVariants =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "start"
  | "end";

export type TextTransformVariants = "upper" | "lower" | "cap" | "normal";

export type HighlightVariants =
  | "none"
  | "yellow"
  | "blue"
  | "purple"
  | "green"
  | "red";

export class TextStyle {
  private static alignInstance: Record<TextAlignVariants, string> =
    Object.freeze({
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
      start: "text-start",
      end: "text-end",
    });

  private static colorInstance: Record<BaseColorVariants, string> =
    Object.freeze({
      none: "text-transparent",
      inherit: "text-inherit",
      default: "text-[rgb(7,39,39)]",
      primary: "text-[rgb(0,0,255)]",
      secondary: "text-[rgb(128,0,128)]",
      success: "text-[rgb(0,128,0)]",
      warning: "text-[rgb(218,165,32)]",
      danger: "text-[rgb(255,0,0)]",
      pale: "text-[rgb(233,233,233)]",
    });

  private static transformInstance: Record<TextTransformVariants, string> =
    Object.freeze({
      upper: "uppercase",
      lower: "lowercase",
      cap: "capitalize",
      normal: "normal-case",
    });

  private static highlightInstance: Record<HighlightVariants, string> =
    Object.freeze({
      none: "bg-[rgb(255,255,255)]",
      yellow: "bg-[rgb(255,255,0)]",
      blue: "bg-[rgb(0,0,255)]",
      purple: "bg-[rgb(128,0,128)]",
      green: "bg-[rgb(0,128,0)]",
      red: "bg-[rgb(255,0,0)]",
    });

  private constructor() {}

  public static align(align: TextAlignVariants) {
    return this.alignInstance[align];
  }

  public static color(color: BaseColorVariants) {
    return this.colorInstance[color];
  }

  public static transform(transform: TextTransformVariants) {
    return this.transformInstance[transform];
  }

  public static highlight(highlight: HighlightVariants) {
    return this.highlightInstance[highlight];
  }
}
