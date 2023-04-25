import { GameBoardCell } from "./types";

export type NonogramPatternValue = {value: number, state: 'completed' | 'wrong' | 'idle'};
export type NonogramPattern = NonogramPatternValue[];
export type NonogramPatterns = NonogramPattern[];
export type NonogramValidCellType = -1 | 0 | 1;
export type NonogramCellType = GameBoardCell<NonogramValidCellType>;
export type NonogramRowType = NonogramCellType[];
export type NonogramBoardType = NonogramCellType[][];