import { SudokuBoard } from "../types/SudokuTypes";

const countNInBoard = (n:number, sudokuBoard:SudokuBoard) => {
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