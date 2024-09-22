import { BaseColorVariants } from "../types/common";

export type BorderStyleVariants =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "hidden"
  | "none";

export type BorderRadiusVariants =
  | "none"
  | "sm"
  | "default"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export type BorderWidthVariants = 0 | 1 | 2 | 4 | 6 | 8;

export class BorderStyle {
  private static instance: Record<BorderStyleVariants, string> = Object.freeze({
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    hidden: "border-hidden",
    none: "border-none",
  });

  private constructor() {}

  public static get(style: BorderStyleVariants) {
    return BorderStyle.instance[style];
  }
}

export class Border {
  private static radiusInstance: Record<BorderRadiusVariants, string> =
    Object.freeze({
      none: "rounded-none",
      sm: "rounded-sm",
      default: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounde-3xl",
      full: "rounded-full",
    });

  private static widthInstance: Record<BorderWidthVariants, string> =
    Object.freeze({
      0: "border-0",
      1: "border",
      2: "border-2",
      4: "border-4",
      6: "border-6",
      8: "border-8",
    });

  private static colorInstance: Record<BaseColorVariants, string> =
    Object.freeze({
      none: "border-transparent",
      inherit: "border-inherit",
      default: "border-[rgb(7,39,39)]",
      primary: "border-[rgb(0,0,255)]",
      secondary: "border-[rgb(128,0,128)]",
      success: "border-[rgb(0,128,0)]",
      warning: "border-[rgb(218,165,32)]",
      danger: "border-[rgb(255,0,0)]",
      pale: "border-[rgb(233,233,233)]",
    });

  private static styleInstance: Record<BorderStyleVariants, string> =
    Object.freeze({
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
      double: "border-double",
      hidden: "border-hidden",
      none: "border-none",
    });

  private constructor() {}

  public static radius(radius: BorderRadiusVariants) {
    return this.radiusInstance[radius];
  }

  public static width(w: BorderWidthVariants) {
    return this.widthInstance[w];
  }

  public static color(color: BaseColorVariants) {
    return this.colorInstance[color];
  }

  public static style(style: BorderStyleVariants) {
    return this.styleInstance[style];
  }
}
