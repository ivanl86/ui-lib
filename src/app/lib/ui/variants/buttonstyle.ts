import { BaseColorVariants, BaseSizeVariants } from "../types/common";

export type ButtonStyleVariants = "solid" | "outline" | "link" | "ghost";

export type ButtonColorVariants = Exclude<
  BaseColorVariants,
  "inherit" | "none" | "pale"
>;

export class ButtonStyle {
  private static variantInstance: Record<ButtonStyleVariants, string> =
    Object.freeze({
      solid: "border-0 bg-opacity-90 hover:bg-opacity-95 active:bg-opacity-100",
      outline: "border bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-25",
      ghost: "border-0 bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-25",
      link: "border-0 bg-opacity-0 text-opacity-75 hover:text-opacity-80 active:text-opacity-100 hover:underline",
    });

  private static sizeInstance: Record<BaseSizeVariants, string> = Object.freeze(
    {
      xs: "h-6 text-sm px-1.5 py-0.5 rounded-md",
      sm: "h-8 text-base px-2 py-1 rounded-lg",
      md: "h-10 text-xl px-2.5 py-1.5 rounded-lg",
      lg: "h-12 text-2xl px-3 py-2 rounded-xl",
      xl: "h-14 text-3xl px-3.5 py-2.5 rounded-2xl",
    }
  );

  private static solidColorInstance: Record<ButtonColorVariants, string> =
    Object.freeze({
      default:
        "text-[rgb(7,39,39)] bg-[rgb(233,233,233)] border-[rgb(233,233,233)]",
      primary:
        "text-[rgb(233,233,233)] bg-[rgb(0,0,255)] border-[rgb(0,0,255)]",
      secondary:
        "text-[rgb(233,233,233)] bg-[rgb(128,0,128)] border-[rgb(128,0,128)]",
      success:
        "text-[rgb(233,233,233)] bg-[rgb(0,128,0)] border-[rgb(0,128,0)]",
      warning:
        "text-[rgb(7,39,39)] bg-[rgb(218,165,32)] border-[rgb(218,165,32)]",
      danger: "text-[rgb(233,233,233)] bg-[rgb(255,0,0)] border-[rgb(255,0,0)]",
    });

  private static otherColorInstance: Record<ButtonColorVariants, string> =
    Object.freeze({
      default:
        "text-[rgb(7,39,39)] bg-[rgb(163,163,163)] border-[rgb(163,163,163)]",
      primary: "text-[rgb(0,0,255)] bg-[rgb(0,0,255)] border-[rgb(0,0,255)]",
      secondary:
        "text-[rgb(128,0,128)] bg-[rgb(128,0,128)] border-[rgb(128,0,128)]",
      success: "text-[rgb(0,128,0)] bg-[rgb(0,128,0)] border-[rgb(0,128,0)]",
      warning:
        "text-[rgb(218,165,32)] bg-[rgb(218,165,32)] border-[rgb(218,165,32)]",
      danger: "text-[rgb(255,0,0)] bg-[rgb(255,0,0)] border-[rgb(255,0,0)]",
    });

  private constructor() {}

  public static get(
    variant: ButtonStyleVariants,
    size: BaseSizeVariants,
    color: ButtonColorVariants
  ) {
    return variant === "solid"
      ? `${this.variantInstance[variant]} ${this.solidColorInstance[color]} ${this.sizeInstance[size]}`
      : `${this.variantInstance[variant]} ${this.otherColorInstance[color]} ${this.sizeInstance[size]}`;
  }
}
