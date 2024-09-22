import { Children, forwardRef, ReactNode, Ref } from "react";
import { CommonTextComponentProps, ComponentTWithoutP } from "./types/common";
import cn from "./cn";
import { BackGround } from "./styles/background";
import { Font } from "./styles/font";
import { Line } from "./styles/line";
import { HighlightVariants, TextStyle } from "./styles/textstyle";

interface TextProps
  extends ComponentTWithoutP<"p", "color">,
    CommonTextComponentProps {}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      bg,
      text,
      weight,
      maxLine,
      textAlign,
      color,
      transform,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(
          "",
          // background
          bg != null && BackGround.color(bg),
          // typography
          text != null && Font.size(text),
          weight != null && Font.weight(weight),
          maxLine != null && Line.clamp(maxLine),
          textAlign != null && TextStyle.align(textAlign),
          TextStyle.color(color || "default"),
          transform != null && TextStyle.transform(transform),
          className
        )}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

interface PreTextProps
  extends ComponentTWithoutP<"pre", "color">,
    CommonTextComponentProps {}

export const PreText = forwardRef<HTMLPreElement, PreTextProps>(
  (
    {
      bg,
      text,
      weight,
      maxLine,
      textAlign,
      color,
      transform,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <pre
        ref={ref}
        {...props}
        className={cn(
          "",
          // background
          bg != null && BackGround.color(bg),
          // typography
          text != null && Font.size(text),
          weight != null && Font.weight(weight),
          maxLine != null && Line.clamp(maxLine),
          textAlign != null && TextStyle.align(textAlign),
          color != null && TextStyle.color(color),
          transform != null && TextStyle.transform(transform),
          className
        )}
      >
        {children}
      </pre>
    );
  }
);

PreText.displayName = "PreText";

type StyledText =
  | "abbr"
  | "b"
  | "cite"
  | "code"
  | "del"
  | "dfn"
  | "em"
  | "i"
  | "ins"
  | "kbd"
  | "mark"
  | "q"
  | "rp"
  | "ruby"
  | "rt"
  | "s"
  | "samp"
  | "span"
  | "sub"
  | "sup"
  | "u"
  | "var"
  | "wbr";

type StyledTextProps<T extends StyledText> = ComponentTWithoutP<T, ""> &
  CommonTextComponentProps & {
    as?: StyledText;
  };

export const StyledText = forwardRef(
  <T extends StyledText>(
    {
      as: Component = "span",
      bg,
      text,
      weight,
      maxLine,
      textAlign,
      color,
      transform,
      className,
      ...props
    }: StyledTextProps<T>,
    ref: Ref<HTMLModElement>
  ) => {
    return (
      <Component
        ref={ref}
        {...props}
        className={cn(
          "",
          // background
          bg != null && BackGround.color(bg),
          // typography
          text != null && Font.size(text),
          weight != null && Font.weight(weight),
          maxLine != null && Line.clamp(maxLine),
          textAlign != null && TextStyle.align(textAlign),
          color != null && TextStyle.color(color),
          transform != null && TextStyle.transform(transform),
          className
        )}
      />
    );
  }
);

StyledText.displayName = "StyledText";

type HiglightProps = TextProps & {
  [key in keyof Omit<CommonTextComponentProps, "bg"> as `q${Capitalize<
    string & key
  >}`]: CommonTextComponentProps[key];
} & { query?: string; qClassName?: string; qBg?: HighlightVariants };

export const Highlight = forwardRef<HTMLParagraphElement, HiglightProps>(
  (
    {
      bg,
      query,
      qBg,
      qText,
      qWeight,
      qMaxLine,
      qTextAlign,
      qColor,
      qTransform,
      qClassName,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const highlight = (child: string) => {
      const regex = new RegExp(`(${query})`, "gi");
      const words = child.split(regex);

      return words.map((word, index) => {
        return word.toLocaleLowerCase() === query?.toLocaleLowerCase() ? (
          <StyledText
            key={index}
            {...props}
            as="mark"
            // typography
            text={qText}
            weight={qWeight}
            maxLine={qMaxLine}
            textAlign={qTextAlign}
            color={qColor || "inherit"}
            transform={qTransform}
            className={cn("", TextStyle.highlight(qBg || "yellow"), qClassName)}
          >
            {word}
          </StyledText>
        ) : (
          <>{word}</>
        );
      });
    };

    const processChild = (child: ReactNode) => {
      return typeof child === "string" ? highlight(child) : child;
    };

    return (
      <Text ref={ref} {...props} bg={bg} className={cn("", className)}>
        {query ? Children.map(children, processChild) : children}
      </Text>
    );
  }
);

Highlight.displayName = "Highlight";

type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps<T extends Headings> = ComponentTWithoutP<T, ""> &
  CommonTextComponentProps & {
    as?: Headings;
  };

export const Heading = forwardRef(
  <T extends Headings>(
    {
      as: Component = "h2",
      bg,
      text,
      weight,
      maxLine,
      textAlign,
      color,
      transform,
      className,
      ...props
    }: HeadingProps<T>,
    ref: Ref<HTMLHeadingElement>
  ) => {
    return (
      <Component
        ref={ref}
        {...props}
        className={cn(
          "",
          // background
          bg != null && BackGround.color(bg),
          // typography
          text != null && Font.size(text),
          Font.weight(weight || "bold"),
          maxLine != null && Line.clamp(maxLine),
          textAlign != null && TextStyle.align(textAlign),
          color != null && TextStyle.color(color),
          transform != null && TextStyle.transform(transform),
          className
        )}
      />
    );
  }
);

Heading.displayName = "Heading";
