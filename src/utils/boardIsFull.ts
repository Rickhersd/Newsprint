import { SudokuBoard } from "../types/SudokuTypes";

const boardIsFull = (boardArray: SudokuBoard) => {
  let result = true;
  boardArray.forEach(row => {
    let count = 0;
    row.forEach(cell => (count += cell));
    if (count !== 45) {
      result = false;
    }
  });
  return result;
};

export default boardIsFull;