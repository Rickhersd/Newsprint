import { GameBoard } from "../types/types";
import { countElementsRow } from "./utils";

export default function checkRepeatedInstances(gameBoard: GameBoard): void {
  gameBoard.forEach(row => {
    const rowValues = countElementsRow(row);
    row.forEach(cell => {
      if (cell.value <= 0) return;
      if (rowValues[cell.value] >= 2) cell.state = "wrong";
    });
  });
}