import { HitoriBoardType, HitoriRowType, HitoriValidCellValues } from "../../types/HitoriTypes";

const buildHitoriBoard = (numericHitoriBoard: HitoriValidCellValues[][]):HitoriBoardType => {
  const hitoriBoard:HitoriBoardType = [];

  numericHitoriBoard.forEach(row => {
    const hitoriRow: HitoriRowType = [];
    row.forEach(value => {
      hitoriRow.push({
        value: value, 
        state: value === -1 ? 'inactive' : 'correct', 
        connectionKey: 0 
      })
    });
    hitoriBoard.push(hitoriRow)
  });
  return hitoriBoard;
}

export default buildHitoriBoard;