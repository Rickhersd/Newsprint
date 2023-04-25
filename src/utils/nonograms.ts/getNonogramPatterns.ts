import { NonogramPattern, NonogramValidCellValuesType } from "../../types/nonogramTypes"

function getNonogramPatterns(nonogramBoard: NonogramValidCellValuesType[][]): NonogramPattern[] {
  const nonogramPatterns:NanogramPattern = [];
  
  nonogramBoard.forEach((row, rowIndex) => {
    const pattern = [];
    let counter = 0;

    row.forEach((cell, cellIndex) => {
      if (nonogramBoard[rowIndex][cellIndex] === 1){
        counter++;
      } else if (counter > 0) { 
        pattern.push(counter)
        counter = 0
      }
    })
    
    if (counter > 0) pattern.push(counter);
    if (pattern.length == 0) pattern.push(0);
    
    nonogramPatterns.push(pattern);
  });

  return nonogramPattern;
}

export default getNonogramPatterns;