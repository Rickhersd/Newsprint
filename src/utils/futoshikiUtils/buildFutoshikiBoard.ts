import { FutoshikiBoardType, FutoshikiCellType} from "../../types/FutoshikiTypes";

const buildFutoshikiBoard = (numericFutoshikiBoard: (number | ("top" | "left" | "right" | "bottom")[]| null)[][]):FutoshikiBoardType => {
  const futoshikiBoard:FutoshikiBoardType = [];

  numericFutoshikiBoard.forEach(row => {
    const futoshikiRow: FutoshikiCellType[] = [];
    row.forEach(futoshikiComparisons => {

      if(typeof futoshikiComparisons === 'number') {
        futoshikiRow.push({
          value: futoshikiComparisons,
          state: 'correct',
          comparisons: null, 
        })
        return  
      }

      futoshikiRow.push({
        value: 0,
        state: 'correct',
        comparisons: !futoshikiComparisons 
          ? null
          : futoshikiComparisons.map(type =>({
            type: type,
            state: 'idle'
          })), 
      })
    });

    futoshikiBoard.push(futoshikiRow)
  });
  return futoshikiBoard;
}

export default buildFutoshikiBoard;