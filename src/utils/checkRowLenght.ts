import { SudokuRowType } from "../types/SudokuTypes";

const checkRowLength = (row: SudokuRowType) => {
  return row.length === 9;
};

export default checkRowLength;