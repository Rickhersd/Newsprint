import { GameBoardCell } from "./types";

export type NonogramPattern = number[];
export type NonogramValidCellType = -1 | 0 | 1;
export type NonogramCellType = GameBoardCell<NonogramValidCellType>;
export type NonogramRowType = {
  rowCellRefs: NanogramCellType[],
  lateralNumbers: number[]
}
export type NonogramColType = {
  colCellRefs: NanogramCellType[],
  lateralNumbers: number[]
}
export type NonogramBoardType = NonogramCellType[][];