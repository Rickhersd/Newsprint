import checkRepeatedInstances from './checkRepeatedInstances';
import { PositionType } from "../types/types";
import { HitoriBoardType, HitoriCellType} from "../types/HitoriTypes";
import { checkAllCorrect, setAllCorrect, invertGameBoard} from "./utils";

function validateHitori(hitoriBoard: HitoriBoardType) {
  setAllCorrect(hitoriBoard);
  setInactiveCells(hitoriBoard);
    
  checkRowsInactiveAdjacentInstances(hitoriBoard);
  checkColsInactiveAdjacentInstances(hitoriBoard);

  checkRowsRepeatedInstances(hitoriBoard);
  checkColsRepeatedInstances(hitoriBoard);

  checkUniqueConnection(hitoriBoard);

  console.log(checkAllCorrect(hitoriBoard))
  return checkAllCorrect(hitoriBoard);
}

function setInactiveCells(gameboard: HitoriBoardType){
  gameboard.forEach(row => row.forEach(cell => {
    if (cell.value === -1 ) cell.state = 'inactive';
  }))
}

function checkInactiveAdjacentCells(hitoriBoard: HitoriBoardType){
  hitoriBoard.forEach(row => row.forEach((cell, cellIndex) => {
    if (cell.value > 0) return;
    [-1, 1].forEach( x => {
      const adjacentHitoriCell = row[cellIndex - x];
      compareTwoInactiveCells(cell, adjacentHitoriCell);
    })
  }))
    
  }

function compareTwoInactiveCells(firstCell: HitoriCellType, secondCell: HitoriCellType ): void {
  if(firstCell == undefined || secondCell === undefined) return;    
  if(firstCell.value > 0 || secondCell.value > 0) return;
  firstCell.state = 'wrong';
  secondCell.state = 'wrong';         
}


function checkRowsInactiveAdjacentInstances(gameBoard: HitoriBoardType): void {
  checkInactiveAdjacentCells(gameBoard);
}

function checkColsInactiveAdjacentInstances(gameBoard: HitoriBoardType): void {
  const invertedGameboard = invertGameBoard(gameBoard);
  checkInactiveAdjacentCells(invertedGameboard as HitoriBoardType);
}

function checkRowsRepeatedInstances(gameBoard: HitoriBoardType): void {
  checkRepeatedInstances(gameBoard);
}

function checkColsRepeatedInstances(gameBoard: HitoriBoardType): void {
  const invertedGameboard = invertGameBoard(gameBoard);
  checkRepeatedInstances(invertedGameboard);
}

function checkUniqueConnection(hitoriBoard: HitoriBoardType){
  resetAllConnectionKeys(hitoriBoard);

  let connectionKey = 1;

  hitoriBoard.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell.value === -1 || cell.connectionKey !== 0) return;
      traverseCells(
        connectionKey, 
        hitoriBoard, 
        {rowIndex, cellIndex}
      )
      connectionKey++;
    })
  })

  checkAllConnectionKeys(hitoriBoard);
}

function traverseCells(connectionKey:number, hitoriBoard: HitoriBoardType, {cellIndex, rowIndex}:PositionType){

  type directions = 'top' | 'bottom' | 'left' | 'right';

  const cellDirections: directions[] = ['top', 'bottom', 'left', 'right'];
  const hitoriCell: HitoriCellType = hitoriBoard[rowIndex][cellIndex];


  hitoriCell.connectionKey = connectionKey;

  cellDirections.forEach(direction => checkAdyacentCell(direction));

  function checkAdyacentCell(direction: directions):void {

    const x: -1 | 0 | 1 = direction === 'left' ? -1 : direction === 'right' ? 1 : 0;
    const y: -1 | 0 | 1 = direction === 'top' ? -1 : direction === 'bottom' ? 1 : 0;

 
    const row = hitoriBoard[rowIndex + y];

    if (row == undefined) return;

    const adyacentCell: undefined | HitoriCellType = row[cellIndex + x];

    if (adyacentCell === undefined ) return;
    if (adyacentCell.value === -1) return;
    if (adyacentCell.connectionKey === connectionKey) return;

    traverseCells(
      connectionKey,
      hitoriBoard,
      {cellIndex: cellIndex + x , rowIndex: rowIndex + y}
    )
  }
}

function resetAllConnectionKeys(gameBoard: HitoriBoardType){
  gameBoard.forEach(row => row.forEach(cell => cell.connectionKey = 0));
}

function checkAllConnectionKeys(hitoriBoard: HitoriBoardType){

  const connectionsDict: Record<number, number> = getConnectionsDict();

  if(Object.entries(connectionsDict).length <= 2) return;

  hitoriBoard.forEach(row => row.forEach(cell => {
    if(cell.connectionKey != 0) cell.state = 'wrong';
  }));

  function getConnectionsDict():Record<number, number> {
    const connectionsDict:Record<number, number> = {};

    hitoriBoard.forEach(row => row.forEach(cell => {
      cell.connectionKey in connectionsDict 
        ? connectionsDict[cell.connectionKey]++
        : connectionsDict[cell.connectionKey] = 1
      }) 
    )

    return connectionsDict;
  }
}

export default validateHitori