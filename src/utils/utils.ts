import { GameBoard, GameBoardRow, GameBoardCell } from "../types/types";

export function countElementsRow(row: GameBoardRow<GameBoardCell<number>>): {[key: string | number]: number } {
  const result: { [key: string | number]: number } = {};
  row.forEach((cell) => {
    result[cell.value] = (result[cell.value] || 0) + 1;
  });
  return result;
}

export function invertGameBoard(gameBoard: GameBoard<GameBoardCell<any>>): GameBoard<GameBoardCell<any>> {
  const rows = gameBoard.length;
  const columns = gameBoard[0].length;
  const invertedArray = [];

  for (let j = 0; j < columns; j++) {
    const invertedRow = [];
    for (let i = 0; i < rows; i++) {
      invertedRow.push(gameBoard[i][j]);
    }
    invertedArray.push(invertedRow);
  }

  return invertedArray;
}

export function setAllCorrect(gameBoard: GameBoard<GameBoardCell<number>>): void {
  gameBoard.forEach((row) => row.forEach((cell) => (cell.state = "correct")));
}

export function checkAllCorrect(gameBoard: GameBoard<GameBoardCell<any>>): boolean {
  for(let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++){
    for(let cellIndex = 0; cellIndex < gameBoard.length; cellIndex++){
      if (gameBoard[rowIndex][cellIndex].state === 'wrong') return false;
      if (gameBoard[rowIndex][cellIndex].state === 'empty') return false;


    }
  }

  return true;
}
