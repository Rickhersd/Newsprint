import { FutoshikiBoardType, FutoshikiCellType } from "../types/FutoshikiTypes";
import { PositionType } from "../types/types";
import { countElementsRow, invertGameBoard } from "./utils";

function setAllCorrect(gameBoard: FutoshikiBoardType): void{
  gameBoard.forEach(row => row.forEach(cell => cell.state = 'correct'));
}

function setAllComparisonsIdle(gameBoard: FutoshikiBoardType): void {
  gameBoard.forEach(row => row.forEach(cell => {
    if(cell.comparisons !== null) {
      cell.comparisons.forEach(comparison => comparison.value = 'idle');
    } 
  }));
}

function checkAllCorrect(gameBoard: FutoshikiBoardType):boolean { 
  gameBoard.forEach(row => row.forEach(cell => {
    if(cell.state === 'wrong') return false;
  }));
  return true;
}

function checkRowsInstance (gameBoard: FutoshikiBoardType): void {
  gameBoard.forEach(row => {
    const rowValues = countElementsRow(row);
    row.forEach(cell => {
      if (rowValues[cell.value] >= 2)
        cell.state = 'wrong';
    })
  }) 
}

function checkColsInstance (gameBoard: FutoshikiBoardType): void {
  const invertedBoard = invertGameBoard(gameBoard);
  checkRowsInstance(invertedBoard);
}

function checkEmptyCells(gameBoard: FutoshikiBoardType): void {
  gameBoard.forEach(row => row.forEach(cell => {
    if (cell.value === 0) cell.state = 'empty';
  })); 
}

export default function validateFutoshiki(gameBoard: FutoshikiBoardType): boolean {
  setAllCorrect(gameBoard);
  setAllComparisonsIdle(gameBoard);

  checkEmptyCells(gameBoard);
  checkRowsInstance(gameBoard);
  checkColsInstance(gameBoard);
  checkComparisons(gameBoard);
  
  return checkAllCorrect(gameBoard);
}

function checkComparisons (gameBoard: FutoshikiBoardType):void {
  gameBoard.forEach((row, rowIndex) => row.forEach(( _, cellIndex) => {
    verificateComparisons({rowIndex, cellIndex}, gameBoard)
  }))
}

function verificateComparisons({rowIndex, cellIndex}: PositionType, gameBoard: FutoshikiBoardType): void {
  
  const higherCell = gameBoard[rowIndex][cellIndex];
  let lowerCell: FutoshikiCellType;

  if( higherCell.comparisons == null || higherCell.value === 0) return;
  
  higherCell.comparisons.forEach(comparison => {   
    switch (comparison.type){
      case 'top':
        lowerCell = gameBoard[rowIndex - 1][cellIndex];
        comparison.value = compareCells(higherCell, lowerCell);
        break;
      case 'bottom':
        lowerCell = gameBoard[rowIndex + 1][cellIndex];
        comparison.value = compareCells(higherCell, lowerCell);
        break;
      case 'left' :
        lowerCell = gameBoard[rowIndex][cellIndex -1]
        comparison.value = compareCells(higherCell, lowerCell);
        break;
      case "right":
        lowerCell = gameBoard[rowIndex][cellIndex + 1]
        comparison.value = compareCells(higherCell, lowerCell);
        break;
    }
  })
}

function compareCells ( higherCell: FutoshikiCellType, lowerCell: FutoshikiCellType): 'correct' | 'wrong' | 'idle'{
  if (lowerCell.value === 0) return 'idle';
  
  if (higherCell.value < lowerCell.value){
    lowerCell.state = 'wrong';
    higherCell.state = 'wrong';
    return 'wrong';
  }
  return 'correct';
}