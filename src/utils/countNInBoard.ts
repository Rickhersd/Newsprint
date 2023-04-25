import { SudokuBoardType, SudokuValidCellValues} from "../types/SudokuTypes";

const countNInBoard = (n:SudokuValidCellValues, sudokuBoard:SudokuBoardType) => {
  let count = 0;
  sudokuBoard.forEach(row => {
    row.forEach((cell) => {
      if (cell.value === n) {
        count++;
      }
    });
  });
  return count;
};

export default countNInBoard;