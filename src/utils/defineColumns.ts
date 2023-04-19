import { SudokuBoardType } from "../types/SudokuTypes";

const defineColumns = (sudokuBoard: SudokuBoardType ) => {
 
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