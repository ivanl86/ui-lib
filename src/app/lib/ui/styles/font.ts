import { AllSizeVariants } from "../types/common";

export type FontWeightVariants =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export class Font {
  private static sizeInstance: Record<AllSizeVariants, string> = Object.freeze({
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
  });

  private static weightInstance: Record<FontWeightVariants, string> =
    Object.freeze({
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    });

  private constructor() {}

  public static size(size: AllSizeVariants) {
    return this.sizeInstance[size];
  }

  public static weight(weight: FontWeightVariants) {
    return this.weightInstance[weight];
  }
}
