import { ElementType, ComponentPropsWithRef } from "react";
import { AlignVariants } from "../styles/flex/align";
import { JustifyVariants } from "../styles/flex/justify";
import { PlaceVariants } from "../styles/flex/place";
import { DirectionVariants } from "../styles/flex/direction";
import { DisplayVariants } from "../styles/layout/display";
import { GapVariants } from "../styles/flex/gap";
import {
  GridTemplateVariants,
  GridSpanVariants,
  GridFlowVariants,
} from "../styles/flex/grid";
import { PlacementVariants, PositionVariants } from "../styles/layout/position";
import { HeightVariants, MaxHeightVariants } from "../styles/sizing/height";
import { WidthVariants, MaxWidthVariants } from "../styles/sizing/width";
import { SpaceBetweenVariants } from "../styles/spacing/spacebetween";
import { MarginVariants } from "../styles/spacing/margin";
import { PaddingVariants } from "../styles/spacing/padding";
import {
  BorderRadiusVariants,
  BorderWidthVariants,
  BorderStyleVariants,
} from "../styles/border";
import { FontWeightVariants } from "../styles/font";
import { LineNumberVariants } from "../styles/line";
import { TextAlignVariants, TextTransformVariants } from "../styles/textstyle";
import { SizeVariants } from "../styles/sizing/size";
import { AspectRatioVariants } from "../styles/layout/aspectratio";
import { FitVariants } from "../styles/layout/objectlayout";
import { InputColorVariants, InputStyleVariants } from "../variants/inputstyle";
import { ButtonColorVariants, ButtonStyleVariants } from "../variants/buttonstyle";
import { FlexWrapVariants } from "../styles/flex/flexitem";

export type BaseColorVariants =
  | "none"
  | "inherit"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "pale";

export type BaseSizeVariants = "xs" | "sm" | "md" | "lg" | "xl";

export type ExtraSizeVariants =
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type AllSizeVariants = BaseSizeVariants | ExtraSizeVariants;

export type SpeicalSizeVariants = "full" | "screen" | "min" | "max" | "fit";

export type NumberedPercentageVariants =
  | "0%"
  | "5%"
  | "10%"
  | "15%"
  | "20%"
  | "25%"
  | "30%"
  | "35%"
  | "40%"
  | "45%"
  | "50%"
  | "55%"
  | "60%"
  | "65%"
  | "70%"
  | "75%"
  | "80%"
  | "85%"
  | "90%"
  | "95%"
  | "100%";

export type BasePercentageVariants =
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "2/4"
  | "3/4";

export type ExtraPercentageVariants =
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"
  | "1/6"
  | "2/6"
  | "3/6"
  | "4/6"
  | "5/6"
  | "1/12"
  | "2/12"
  | "3/12"
  | "4/12"
  | "5/12"
  | "6/12"
  | "7/12"
  | "8/12"
  | "9/12"
  | "10/12"
  | "11/12";

export type PercentageVariants =
  | BasePercentageVariants
  | ExtraPercentageVariants;

export type RemVariants =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

export type PreStyledVariants =
  | "filled"
  | "outlined"
  | "underlined"
  | "unstyled";

export interface PreStyledProps {
  maxW?: MaxWidthVariants;
  size?: BaseSizeVariants;
  // color?: BaseColorVariants;
}

export interface InputStyleProps extends PreStyledProps {
  variant?: InputStyleVariants;
  color?: InputColorVariants;
}

export interface ButtonStyleProps extends PreStyledProps {
  variant?: ButtonStyleVariants;
  color?: ButtonColorVariants;
}

export type ComponentTWithoutP<
  T extends ElementType,
  P extends string | symbol
> = Omit<ComponentPropsWithRef<T>, P>;

export interface LayoutComponentProps {
  aspectRatio?: AspectRatioVariants;
  display?: DisplayVariants;
  position?: PositionVariants;
  top?: PlacementVariants;
  right?: PlacementVariants;
  bottom?: PlacementVariants;
  left?: PlacementVariants;
  fit?: FitVariants;
}

export interface FlexComponentProps {
  direction?: DirectionVariants;
  flexWrap?: FlexWrapVariants;
  justify?: JustifyVariants;
  align?: AlignVariants;
  place?: PlaceVariants;
  gap?: GapVariants;
}

export interface GridComponentProps {
  cols?: GridTemplateVariants;
  rows?: GridTemplateVariants;
  colSpan?: GridSpanVariants;
  rowSpan?: GridSpanVariants;
  flow?: GridFlowVariants;
}

export interface SizeComponentProps {
  h?: HeightVariants;
  w?: WidthVariants;
  maxH?: MaxHeightVariants;
  maxW?: MaxWidthVariants;
  size?: SizeVariants;
}

export interface SpacingComponentProps {
  m?: MarginVariants;
  p?: PaddingVariants;
  x?: SpaceBetweenVariants;
  y?: SpaceBetweenVariants;
}

export interface BackgroundComponentProps {
  bg?: BaseColorVariants;
}

export interface BorderComponentProps {
  radius?: BorderRadiusVariants;
  borderW?: BorderWidthVariants;
  borderC?: BaseColorVariants;
  borderStyle?: BorderStyleVariants;
}

export interface FontComponentProps {
  text?: AllSizeVariants;
  weight?: FontWeightVariants;
}

export interface LineComponentProps {
  maxLine?: LineNumberVariants;
}

export interface TextComponentProps {
  textAlign?: TextAlignVariants;
  color?: BaseColorVariants;
  transform?: TextTransformVariants;
}

export interface CommonTextComponentProps
  extends BackgroundComponentProps,
    FontComponentProps,
    LineComponentProps,
    TextComponentProps {}

export interface CommonComponentProps
  extends LayoutComponentProps,
    FlexComponentProps,
    SizeComponentProps,
    SpacingComponentProps,
    BackgroundComponentProps,
    BorderComponentProps,
    FontComponentProps,
    LineComponentProps,
    TextComponentProps {}
