import { SudokuBoard } from "../types/SudokuTypes";

const defineColumns = (sudokuBoard: SudokuBoard ) => {
 
  let arrayOfColumns: number[][] = [];
 
  sudokuBoard.forEach( _ => arrayOfColumns.push([]));

  sudokuBoard.forEach(row => {
    row.forEach((value, i) => {
      arrayOfColumns[i].push(value);
    });
  });

  return arrayOfColumns;
};

export default defineColumns;