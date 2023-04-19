import validateArray from "./validateArray";
import checkBoardSize from "./checkBoardSize";
import defineColumns from "./defineColumns";
import defineBoxes from "./defineBoxes";
import { SudokuBoardType } from "../types/SudokuTypes";

const validateGameBoard = (boardArray: SudokuBoardType) => {
  let isValid = checkBoardSize(boardArray);

  // Use helper functions to define columns and boxes
  const columns = defineColumns(boardArray);
  const boxes = defineBoxes(boardArray);

  // Validate each row
  boardArray.forEach((row) => {
    if (!validateArray(row)) {
      isValid = false;
    }
  });
  // Validate each column
  columns.forEach((column) => {
    if (!validateArray(column)) {
      isValid = false;
    }
  });
  // Validate each box
  boxes.forEach((box) => {
    if (!validateArray(box)) {
      isValid = false;
    }
  });

  // If each component passes validation the board is complete!
  return isValid;
};

export default validateGameBoard;