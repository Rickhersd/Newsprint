import defineBoxes from "./defineBoxes";
import checkEmptyCells from "./checkEmptyCell";
import { SudokuBoardType } from "../types/SudokuTypes";
import { checkAllCorrect, setAllCorrect, countElementsRow, invertGameBoard,} from "./utils";

function checkSudoku(sudokuBoard: SudokuBoardType) {
  setAllCorrect(sudokuBoard);
  
  checkEmptyCells(sudokuBoard);
  checkBoxexInstance(sudokuBoard);
  checkColsInstance(sudokuBoard);
  checkRowsInstance(sudokuBoard);

  return checkAllCorrect(sudokuBoard);
}

function checkRowsInstance(gameBoard: SudokuBoardType): void {
  gameBoard.forEach((row) => {
    const rowValues = countElementsRow(row);
    row.forEach((cell) => {
        if (cell.value === 0) return;
        if (rowValues[cell.value] >= 2) cell.state = "wrong";
    });
  });
}

function checkColsInstance(gameBoard: SudokuBoardType): void {
  const columns = invertGameBoard(gameBoard);
  checkRowsInstance(columns);
}

function checkBoxexInstance(gameBoard: SudokuBoardType): void {
  const boxes = defineBoxes(gameBoard);
  checkRowsInstance(boxes);
}

export default checkSudoku;