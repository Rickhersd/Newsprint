import { FutoshikiBoardType, FutoshikiRowType } from "../../types/FutoshikiTypes";

const buildFutoshikiBoard = (numericFutoshikiBoard: (("top" | "left" | "right" | "bottom")[]| null)[][]):FutoshikiBoardType => {
  const futoshikiBoard:FutoshikiBoardType = [];

  numericFutoshikiBoard.forEach(row => {
    const futoshikiRow: FutoshikiRowType = [];
    row.forEach(futoshikiComparisons => {

      if(typeof futoshikiComparisons === 'number') {
        console.log('gola')
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