import { SudokuBoardType } from "../types/SudokuTypes";

const countNInBoard = (n:number, sudokuBoard:SudokuBoardType) => {
  let count = 0;
  sudokuBoard.forEach((row) => {
    row.forEach((value) => {
      if (value === n) {
        count++;
      }
    });
  });
  return count;
};

export default countNInBoard;