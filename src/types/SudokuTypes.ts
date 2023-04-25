import { GameBoardCell, GameBoardRow, GameBoard } from "./types";

export type SudokuValidCellValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type SudokuCellType = GameBoardCell<SudokuValidCellValues> & {readOnly: boolean};
export type SudokuRowType = GameBoardRow<SudokuCellType>;
export type SudokuBoardType = GameBoard<SudokuCellType>;