import { GameBoard, GameBoardCell } from "../types/types";

export default function checkEmptyCells(
  gameBoard: GameBoard<GameBoardCell<number>>
): void {
  gameBoard.forEach((row) =>
    row.forEach((cell) => {
      if (cell.value === 0) cell.state = "empty";
    })
  );
}
