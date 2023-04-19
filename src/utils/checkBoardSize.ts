import { SudokuBoardType } from "../types/SudokuTypes";
import checkRowLength from "./checkRowLenght";

const checkBoardSize = (board: SudokuBoardType) => {
  if (board.length !== 9) return false;

  let isValid = true;
  board.forEach(row => {
    // If checkRowLength returns false for any row, isValid will also be marked as false
    isValid = checkRowLength(row);
  });
  return isValid;
};

export default checkBoardSize;