import { SudokuBoardType, SudokuCellType } from "../types/SudokuTypes";

const defineBoxes = (sudokuBoard: SudokuBoardType): SudokuCellType[][] => {
  const arrayOfBoxes: SudokuCellType[][] = [];

  sudokuBoard.forEach((_) => arrayOfBoxes.push([]));

  let boxIndex = 0;
  let boxSet = 0;
  let count = 1;

  sudokuBoard.forEach((row, i) => {
    if (i < 3) {
      boxSet = 0;
    }
    if (i >= 3 && i < 6) {
      boxSet = 3;
    }
    if (i > 5) {
      boxSet = 6;
    }

    row.forEach((value) => {
      if (boxIndex % 3 === 0) {
        boxIndex = boxSet;
      }
      arrayOfBoxes[boxIndex].push(value);
      if (count % 3 === 0) {
        boxIndex++;
      }
      count++;
    });
  });

  return arrayOfBoxes;
};

export default defineBoxes;
