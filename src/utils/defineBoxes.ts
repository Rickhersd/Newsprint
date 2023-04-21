import { SudokuBoard, SudokuRowType } from "../types/SudokuTypes";

const defineBoxes = (sudokuBoard: SudokuBoard) => {
  
  const arrayOfBoxes:SudokuRowType[] = [];

  sudokuBoard.forEach( _ => arrayOfBoxes.push([]))

  let box = 0;

  // boxSet will tell us which 'row' of boxes we need to be inserting into
  let boxSet = 0;

  // count will tell us when to move on to the next box when sorting
  let count = 1;

  // define box sets from input
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
    
      if (box % 3 === 0) {
        box = boxSet;
      }
      arrayOfBoxes[box].push(value);
      if (count % 3 === 0) {
        box++;
      }
      count++;
    });
  });

  return arrayOfBoxes;
};

export default defineBoxes;