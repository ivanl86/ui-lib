import { forwardRef } from "react";
import { CommonComponentProps, ComponentTWithoutP } from "./types/common";
import cn from "./cn";
import { Position } from "./styles/layout/position";
import { Direction } from "./styles/flex/direction";
import { Justify } from "./styles/flex/justify";
import { Align } from "./styles/flex/align";
import { Place } from "./styles/flex/place";
import { Gap } from "./styles/flex/gap";
import { Height } from "./styles/sizing/height";
import { Size } from "./styles/sizing/size";
import { Width } from "./styles/sizing/width";
import { SpaceBetween } from "./styles/spacing/spacebetween";
import { Margin } from "./styles/spacing/margin";
import { Padding } from "./styles/spacing/padding";
import { BackGround } from "./styles/background";
import { Border } from "./styles/border";
import { Font } from "./styles/font";
import { Line } from "./styles/line";
import { TextStyle } from "./styles/textstyle";
import { AspectRatio } from "./styles/layout/aspectratio";
import { ObjectLayout } from "./styles/layout/objectlayout";
import { FlexItem } from "./styles/flex/flexitem";

export interface BoxProps
  extends ComponentTWithoutP<"div", "color">,
    CommonComponentProps {}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      aspectRatio,
      display,
      position,
      top,
      right,
      bottom,
      left,
      fit,
      direction,
      flexWrap,
      justify,
      align,
      place,
      gap,
      h,
      w,
      maxH,
      maxW,
      size,
      m,
      p,
      x,
      y,
      bg,
      radius,
      borderW,
      borderC,
      borderStyle,
      text,
      weight,
      maxLine,
      textAlign,
      color,
      transform,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "",
          // layout
          aspectRatio != null && AspectRatio.get(aspectRatio),
          display,
          position,
          top != null && Position.top(top),
          right != null && Position.right(right),
          bottom != null && Position.bottom(bottom),
          left != null && Position.left(left),
          fit != null && ObjectLayout.fit(fit),
          // flex
          direction != null && Direction.flex(direction),
          flexWrap != null && FlexItem.wrap(flexWrap),
          justify?.content != null && Justify.content(justify.content),
          justify?.items != null && Justify.items(justify.items),
          justify?.self != null && Justify.self(justify.self),
          align?.content != null && Align.content(align.content),
          align?.items != null && Align.items(align.items),
          align?.self != null && Align.self(align.self),
          place?.content != null && Place.content(place.content),
          place?.items != null && Place.items(place.items),
          place?.self != null && Place.self(place.self),
          gap != null && Gap.get(gap),
          // size
          h != null && Height.get(h),
          maxH != null && Height.getMax(maxH),
          w != null && Width.get(w),
          maxW != null && Width.getMax(maxW),
          size != null && Size.get(size),
          // spacing
          m != null && Margin.get(m),
          p != null && Padding.get(p),
          x != null && SpaceBetween.x(x),
          y != null && SpaceBetween.y(y),
          // background
          bg != null && BackGround.color(bg),
          // border
          radius != null && Border.radius(radius),
          borderW != null && Border.width(borderW),
          borderC != null && Border.color(borderC),
          borderStyle != null && Border.style(borderStyle),
          // typography
          text != null && Font.size(text),
          weight != null && Font.weight(weight),
          maxLine != null && Line.clamp(maxLine),
          textAlign != null && TextStyle.align(textAlign),
          TextStyle.color(color || "default"),
          transform != null && TextStyle.transform(transform),
          className
        )}
      />
    );
  }
);

Box.displayName = "Box";
