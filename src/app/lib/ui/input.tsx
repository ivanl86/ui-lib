import { forwardRef } from "react";
import { ComponentTWithoutP, InputStyleProps } from "./types/common";
import cn from "./cn";
import { InputStyle } from "./variants/inputstyle";
import { Width } from "./styles/sizing/width";

interface InputProps
  extends ComponentTWithoutP<"input", "color" | "size">,
    InputStyleProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, maxW, size, color, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn(
          "outline-none ease-in-out duration-300",
          "placeholder:text-current placeholder:font-light placeholder:truncate",
          "disabled:cursor-not-allowed disabled:bg-opacity-10 disabled:border-opacity-10",
          "disabled:hover:bg-opacity-10 disabled:hover:border-opacity-10",
          "disabled:placeholder:opacity-30",
          Width.get("full"),
          Width.getMax(maxW || "full"),
          InputStyle.size(size || "md"),
          InputStyle.color(color || "default"),
          InputStyle.variant(variant || "unstyled"),
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";
