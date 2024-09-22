type ContentVariants =
  | "normal"
  | "center"
  | "start"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "baseline"
  | "stretch";

type ItemsVariants = "start" | "end" | "center" | "baseline" | "stretch";

type SelfVariants =
  | "auto"
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "baseline";

export interface AlignVariants {
  content?: ContentVariants;
  items?: ItemsVariants;
  self?: SelfVariants;
}

export class Align {
  private static contentInstance: Record<ContentVariants, string> =
    Object.freeze({
      normal: "content-normal",
      center: "content-center",
      start: "content-start",
      end: "content-end",
      between: "content-between",
      around: "content-around",
      evenly: "content-evenly",
      baseline: "content-baseline",
      stretch: "content-stretch",
    });
  private static itemsInstance: Record<ItemsVariants, string> = Object.freeze({
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch",
  });
  private static selfInstance: Record<SelfVariants, string> = Object.freeze({
    auto: "self-auto",
    start: "self-start",
    end: "self-end",
    center: "self-center",
    stretch: "self-stretch",
    baseline: "self-baseline",
  });

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
