type ContentVariants =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

type ItemsVariants = "start" | "end" | "center" | "stretch";

type SelfVariants = "auto" | "start" | "end" | "center" | "stretch";

export interface JustifyVariants {
  content?: ContentVariants;
  items?: ItemsVariants;
  self?: SelfVariants;
}

export class Justify {
  private static contentInstance: Record<ContentVariants, string> =
    Object.freeze({
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch",
    });

  private static itemsInstance: Record<ItemsVariants, string> = Object.freeze({
    start: "justify-items-start",
    end: "justify-items-end",
    center: "justify-items-center",
    stretch: "justify-items-stretch",
  });

  private static selfInstance: Record<SelfVariants, string> = Object.freeze({
    auto: "justify-self-auto",
    start: "justify-self-start",
    end: "justify-self-end",
    center: "justify-self-center",
    stretch: "justify-self-stretch",
  });

  private constructor() {}

  public static content(content: ContentVariants) {
    return this.contentInstance[content];
  }

  public static items(items: ItemsVariants) {
    return this.itemsInstance[items];
  }

  public static self(self: SelfVariants) {
    return this.selfInstance[self];
  }
}
