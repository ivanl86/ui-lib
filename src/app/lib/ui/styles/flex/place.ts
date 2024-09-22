type ContentVariants =
  | "center"
  | "start"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "baseline"
  | "stretch";

type ItemsVariants = "start" | "end" | "center" | "baseline" | "stretch";

type SelfVariants = "auto" | "start" | "end" | "center" | "stretch";

export interface PlaceVariants {
  content?: ContentVariants;
  items?: ItemsVariants;
  self?: SelfVariants;
}

export class Place {
  private static contentInstance: Record<ContentVariants, string> =
    Object.freeze({
      center: "place-content-center",
      start: "place-content-start",
      end: "place-content-end",
      between: "place-content-between",
      around: "place-content-around",
      evenly: "place-content-evenly",
      baseline: "place-content-baseline",
      stretch: "place-content-stretch",
    });

  private static itemsInstance: Record<ItemsVariants, string> = Object.freeze({
    start: "place-items-start",
    end: "place-items-end",
    center: "place-items-center",
    baseline: "place-items-baseline",
    stretch: "place-items-stretch",
  });

  private static selfInstance: Record<SelfVariants, string> = Object.freeze({
    auto: "place-self-auto",
    start: "place-self-start",
    end: "place-self-end",
    center: "place-self-center",
    stretch: "place-self-stretch",
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
