import { forwardRef } from "react";
import { ButtonStyleProps, ComponentTWithoutP } from "./types/common";
import cn from "./cn";
import { Width } from "./styles/sizing/width";
import { ButtonStyle } from "./variants/buttonstyle";

interface ButtonProps
  extends ComponentTWithoutP<"button", "color">,
    ButtonStyleProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, maxW, size, color, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "active:scale-95 active:ease-in-out",
          Width.get("fit"),
          Width.getMax(maxW || "full"),
          ButtonStyle.get(variant || "solid", size || "md", color || "default"),
          className
        )}
      />
    );
  }
);

Button.displayName = "Button";
