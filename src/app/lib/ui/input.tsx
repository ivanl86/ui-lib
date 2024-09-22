"use client";

import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  Ref,
  useContext,
} from "react";
import { ComponentTWithoutP, InputStyleProps } from "./types/common";
import cn from "./cn";
import { InputStyle } from "./variants/inputstyle";
import { Width } from "./styles/sizing/width";
import { Circle, Square } from "./layout";
import { Box } from "./box";

interface InputGroupContextProps {
  hasLeft: boolean;
  hasRight: boolean;
}

const InputGroupContext = createContext<InputGroupContextProps | undefined>(
  undefined
);

const useInputGroupContext = () => {
  const context = useContext(InputGroupContext);

  if (!context) {
    return {
      hasLeft: false,
      hasRight: false,
    };
  }

  return context;
};

interface InputProps
  extends ComponentTWithoutP<"input", "color" | "size">,
    InputStyleProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, maxW, size, color, className, ...props }, ref) => {
    const { hasLeft, hasRight } = useInputGroupContext();
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
          hasLeft && "pl-8",
          hasRight && "pr-8",
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

type InputGroupProps = ComponentTWithoutP<typeof Box, "">;

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, className, ...props }, ref) => {
    let hasLeft = false;
    let hasRight = false;

    Children.forEach(children, (child) => {
      if (isValidElement(child)) {
        console.log(child.props.on);;
        if (child.props.on === "left") hasLeft = true;
        if (child.props.on === "right") hasRight = true;
      }
    });

    console.log("left:", hasLeft, "right:", hasRight);

    return (
      <InputGroupContext.Provider value={{ hasLeft, hasRight }}>
        <Box ref={ref} {...props} display="flex" w="fit" position="relative" className={cn("", className)}>
          {children}
        </Box>
      </InputGroupContext.Provider>
    );
  }
);

InputGroup.displayName = "InputGroup";

type InputElementProps<T extends typeof Square | typeof Circle> =
  ComponentTWithoutP<T, ""> & {
    as?: typeof Square | typeof Circle;
    on?: "left" | "right";
  };

export const InputElement = forwardRef(
  <T extends typeof Square | typeof Circle>(
    { as: Element = Square, on, className, ...props }: InputElementProps<T>,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Element
        ref={ref}
        {...props}
        position="absolute"
        h="fit"
        w="fit"
        m="auto"
        top={0}
        bottom={0}
        {...(on === "left" ? { left: 2 } : { right: 2 })}
        className={cn("", className)}
      />
    );
  }
);

InputElement.displayName = "InputElement";
