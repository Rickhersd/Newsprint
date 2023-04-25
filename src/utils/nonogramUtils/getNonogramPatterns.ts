import { NonogramPatterns, NonogramPattern, NonogramCellType } from "../../types/nonogramTypes"

function getNonogramPatterns(nonogramBoard: NonogramCellType[][]): NonogramPatterns {
  const nonogramPatterns:NonogramPatterns = [];
  
  nonogramBoard.forEach(row => {
    const pattern = [];
    let counter = 0;

    row.forEach(cell => {
      if (cell.value === 1){
        counter++;
      } else if (counter > 0) {  
        pattern.push({value:counter, state:'idle'})
        counter = 0
      }
    })
    
    if (counter > 0) pattern.push({value:counter, state:'idle'});
    if (pattern.length == 0) pattern.push({value: 0, state:'idle'});
    
    nonogramPatterns.push(pattern as NonogramPattern);
  });

  return nonogramPatterns;
}

export default getNonogramPatterns;