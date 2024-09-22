import { BaseColorVariants } from "../types/common";

export class BackGround {
  private static colorInstance: Record<BaseColorVariants, string> =
    Object.freeze({
      none: "bg-transparent",
      inherit: "bg-inherit",
      default: "bg-[rgb(7,39,39)]",
      primary: "bg-[rgb(0,0,255)]",
      secondary: "bg-[rgb(128,0,128)]",
      success: "bg-[rgb(0,128,0)]",
      warning: "bg-[rgb(218,165,32)]",
      danger: "bg-[rgb(255,0,0)]",
      pale: "bg-[rgb(233,233,233)]",
    });

  private constructor() {}

  public static color(color: BaseColorVariants) {
    return this.colorInstance[color];
  }
}
