type BaseGridVariants = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridTemplateVariants = BaseGridVariants | "none" | "subgrid";

export type GridSpanVariants = BaseGridVariants | "auto" | "full";

export type GridFlowVariants = "row" | "col" | "dense" | "row-dense" | "col-dense";

export class GridTemplate {
  private static colsInstance: Map<GridTemplateVariants, string> = new Map<
  GridTemplateVariants,
  string
  >([
    [1, "grid-cols-1"],
    [2, "grid-cols-2"],
    [3, "grid-cols-3"],
    [4, "grid-cols-4"],
    [5, "grid-cols-5"],
    [6, "grid-cols-6"],
    [7, "grid-cols-7"],
    [8, "grid-cols-8"],
    [9, "grid-cols-9"],
    [10, "grid-cols-10"],
    [11, "grid-cols-11"],
    [12, "grid-cols-12"],
    ["none", "grid-cols-none"],
    ["subgrid", "grid-cols-subgrid"],
  ]);
  
  private static rowsInstance: Map<GridTemplateVariants, string> = new Map<
  GridTemplateVariants,
  string
  >([
    [1, "grid-rows-1"],
    [2, "grid-rows-2"],
    [3, "grid-rows-3"],
    [4, "grid-rows-4"],
    [5, "grid-rows-5"],
    [6, "grid-rows-6"],
    [7, "grid-rows-7"],
    [8, "grid-rows-8"],
    [9, "grid-rows-9"],
    [10, "grid-rows-10"],
    [11, "grid-rows-11"],
    [12, "grid-rows-12"],
    ["none", "grid-rows-none"],
    ["subgrid", "grid-rows-subgrid"],
  ]);

  private static colSpanInstance: Map<GridSpanVariants, string> = new Map<
  GridSpanVariants,
  string
  >([
    [1, "col-span-1"],
    [2, "col-span-2"],
    [3, "col-span-3"],
    [4, "col-span-4"],
    [5, "col-span-5"],
    [6, "col-span-6"],
    [7, "col-span-7"],
    [8, "col-span-8"],
    [9, "col-span-9"],
    [10, "col-span-10"],
    [11, "col-span-11"],
    [12, "col-span-12"],
    ["auto", "col-span-auto"],
    ["full", "col-span-full"],
  ]);

  private static rowSpanInstance: Map<GridSpanVariants, string> = new Map<
  GridSpanVariants,
  string
  >([
    [1, "row-span-1"],
    [2, "row-span-2"],
    [3, "row-span-3"],
    [4, "row-span-4"],
    [5, "row-span-5"],
    [6, "row-span-6"],
    [7, "row-span-7"],
    [8, "row-span-8"],
    [9, "row-span-9"],
    [10, "row-span-10"],
    [11, "row-span-11"],
    [12, "row-span-12"],
    ["auto", "row-span-auto"],
    ["full", "row-span-full"],
  ]);

  private static flowInstance: Map<GridFlowVariants, string> = new Map<
  GridFlowVariants,
  string
  >([
    ["row", "grid-flow-row"],
    ["col", "grid-flow-col"],
    ["dense", "grid-flow-dense"],
    ["row-dense", "grid-flow-row-dense"],
    ["col-dense", "grid-flow-col-dense"],
  ]);

  private constructor() {}

  public static cols(cols: GridTemplateVariants) {
    return this.colsInstance.get(cols);
  }

  public static rows(rows: GridTemplateVariants) {
    return this.rowsInstance.get(rows);
  }

  public static colSpan(span: GridSpanVariants) {
    return this.colSpanInstance.get(span);
  }

  public static rowSpan(span: GridSpanVariants) {
    return this.rowSpanInstance.get(span);
  }

  public static flow(flow: GridFlowVariants) {
    return this.flowInstance.get(flow);
  }
}
