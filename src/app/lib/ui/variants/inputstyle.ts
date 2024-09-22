import {
  BaseColorVariants,
  BaseSizeVariants,
} from "../types/common";

export type InputStyleVariants =
  | "filled"
  | "outline"
  | "underline"
  | "unstyled";

export type InputColorVariants = Exclude<BaseColorVariants, "inherit">;

export class InputStyle {
  private static variantInstance: Record<InputStyleVariants, string> =
    Object.freeze({
      filled: "border-0 bg-opacity-20 hover:bg-opacity-30 focus:bg-opacity-10",
      outline:
        "bg-transparent border border-opacity-30 hover:border-opacity-60 focus:border-opacity-100",
      underline:
        "bg-transparent border-b-2 rounded-none border-opacity-30 hover:border-opacity-60 focus:border-opacity-100",
      unstyled: "bg-transparent",
    });

  private static sizeInstance: Record<BaseSizeVariants, string> = Object.freeze(
    {
      // xs h=24px
      xs: "h-6 text-sm px-1.5 py-0.5 rounded-md",
      // sm h=32px
      sm: "h-8 text-base px-2 py-1 rounded-lg",
      // md h=40px
      md: "h-10 text-xl px-2.5 py-1.5 rounded-lg",
      // lg h=48px
      lg: "h-12 text-2xl px-3 py-2 rounded-xl",
      // xl h=56px
      xl: "h-14 text-3xl px-3.5 py-2.5 rounded-2xl",
    }
  );

  private static colorInstance: Record<InputColorVariants, string> =
    Object.freeze({
      none: "text-transparent bg-transparent border-transparent",
      // darkgray
      default: "text-[rgb(7,39,39)] bg-[rgb(7,39,39)] border-[rgb(7,39,39)]",
      // blue
      primary: "text-[rgb(0,0,255)] bg-[rgb(0,0,255)] border-[rgb(0,0,255)]",
      // purple
      secondary:
        "text-[rgb(128,0,128)] bg-[rgb(128,0,128)] border-[rgb(128,0,128)]",
      success: "text-[rgb(0,128,0)] bg-[rgb(0,128,0)] border-[rgb(0,128,0)]",
      // goldenrod
      warning:
        "text-[rgb(218,165,32)] bg-[rgb(218,165,32)] border-[rgb(218,165,32)]",
      // red
      danger: "text-[rgb(255,0,0)] bg-[rgb(255,0,0)] border-[rgb(255,0,0)]",
      // offwhite
      pale: "text-[rgb(233,233,233)] bg-[rgb(233,233,233)] border-[rgb(233,233,233)]",
    });

  private constructor() {}

  public static variant(variant: InputStyleVariants) {
    return this.variantInstance[variant];
  }

  public static size(size: BaseSizeVariants) {
    return this.sizeInstance[size];
  }

  public static color(color: InputColorVariants) {
    return this.colorInstance[color];
  }
}
