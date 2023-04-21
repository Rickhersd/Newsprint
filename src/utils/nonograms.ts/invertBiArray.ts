function invertBiArray(array: any[][]): any[] {
  const rows = array.length;
  const columns = array[0].length;
  const invertedArray = [];
  
  for (let j = 0; j < columns; j++) {
    const invertedRow = [];
    
    for (let i = 0; i < rows; i++) {
      invertedRow.push(array[i][j]);
    }
    
    invertedArray.push(invertedRow);
  }
  
  return invertedArray;
}

export default invertBiArray