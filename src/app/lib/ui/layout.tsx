import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { Box } from "./box";
import cn from "./cn";
import {
  ComponentTWithoutP,
  FlexComponentProps,
  GridComponentProps,
} from "./types/common";
import { GridTemplate } from "./styles/flex/grid";

type BoxPropsWithoutDisplay = ComponentTWithoutP<typeof Box, "display">;

type FlexProps = BoxPropsWithoutDisplay & {
  wrap?: boolean;
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, flexWrap, place, w, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        display="flex"
        direction={direction || "row"}
        flexWrap={flexWrap || "wrap"}
        place={place || { content: "center", items: "center", self: "center" }}
        w={w || "full"}
        className={cn("", className)}
      />
    );
  }
);

Flex.displayName = "Flex";

type StackProps = ComponentTWithoutP<typeof Flex, "direction"> & {
  reverse?: boolean;
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ reverse, place, w, className, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        {...props}
        direction={reverse ? "col-r" : "col"}
        place={place}
        w={w || "fit"}
        className={cn("", className)}
      />
    );
  }
);

Stack.displayName = "Stack";

type CenterProps = ComponentTWithoutP<
  typeof Flex,
  keyof FlexComponentProps | "fit" | "justify" | "align" | "place" | "textAlign"
>;

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ className, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        {...props}
        fit="contain"
        textAlign="center"
        className={cn("overflow-hidden", className)}
      />
    );
  }
);

Center.displayName = "Center";

type SquareProps = ComponentTWithoutP<
  typeof Center,
  "aspectRatio" | "position"
>;

export const Square = forwardRef<HTMLDivElement, SquareProps>(
  ({ radius, h, p, className, ...props }, ref) => {
    return (
      <Center
        ref={ref}
        {...props}
        aspectRatio="square"
        position="relative"
        radius={radius || "2xl"}
        h={h || "auto"}
        p={p || "15%"}
        className={cn("", className)}
      />
    );
  }
);

Square.displayName = "Square";

type CircleProps = SquareProps;

export const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ radius, className, ...props }, ref) => {
    return (
      <Square
        ref={ref}
        {...props}
        radius={radius || "full"}
        className={cn("", className)}
      />
    );
  }
);

Circle.displayName = "Circle";

type GridProps = BoxPropsWithoutDisplay & GridComponentProps;

const GridComponent = forwardRef<HTMLDivElement, GridProps>(
  ({ w, cols, rows, colSpan, rowSpan, flow, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        display="grid"
        w={w || "full"}
        className={cn(
          "overflow-hidden",
          cols != null && GridTemplate.cols(cols),
          rows != null && GridTemplate.rows(rows),
          colSpan != null && GridTemplate.colSpan(colSpan),
          rowSpan != null && GridTemplate.rowSpan(rowSpan),
          flow != null && GridTemplate.flow(flow),
          className
        )}
      />
    );
  }
);

GridComponent.displayName = "Grid";

const GridItem = forwardRef<HTMLDivElement, GridProps>(
  ({ className, ...props }, ref) => {
    return (
      <GridComponent
        ref={ref}
        {...props}
        className={cn("overflow-hidden", className)}
      />
    );
  }
);

GridItem.displayName = "GridItem";

interface Grid
  extends ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>> {
  Item: typeof GridItem;
}

export const Grid = GridComponent as Grid;

Grid.Item = GridItem;
