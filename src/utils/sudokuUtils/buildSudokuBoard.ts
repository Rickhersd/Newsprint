import { SudokuBoardType, SudokuRowType, SudokuValidCellValues } from "../../types/SudokuTypes";

const buildGameBoard = (gameBoard: SudokuValidCellValues[][]):SudokuBoardType => {
  let sudokuBoard:SudokuBoardType = [];
  gameBoard.forEach(row => {
    let sudokuRow: SudokuRowType = [];
    row.forEach(value => {
      sudokuRow.push({
        value: value, 
        state: value !== 0 ? 'correct' : 'empty', 
        readOnly: value !== 0 
      })
    });
    sudokuBoard.push(sudokuRow)
  });
  return sudokuBoard;
}

export default buildGameBoard;