import { NonogramBoardType, NonogramRowType, NonogramValidCellType } from "../../types/nonogramTypes";

const buildNonogramBoard = (numericNonogramBoard: NonogramValidCellType[][], forPattern = false):NonogramBoardType => {
  const nonogramBoard:NonogramBoardType = [];

  numericNonogramBoard.forEach(row => {
    const nonogramRow: NonogramRowType = [];
    row.forEach(value => {
      nonogramRow.push({
        value: value === -1 ? -1 : forPattern ? value : 0, 
        state: value === -1 ? 'inactive' : 'correct'
      })
    });
    nonogramBoard.push(nonogramRow)
  });
  return nonogramBoard;
}

export default buildNonogramBoard;