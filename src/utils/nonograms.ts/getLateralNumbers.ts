function getLateralNumbers(board: (-1 | 0 | 1)[][]) {
  const lateralNumbers = [];
  
  for (let i = 0; i < board.length; i++) {
    let numerosFila = [];
    let contador = 0;
    
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        contador++;
      } else if (contador > 0) {
        numerosFila.push(contador);
        contador = 0;
      }
    }
    
    if (contador > 0) {
      numerosFila.push(contador);
    }
    
    lateralNumbers.push(numerosFila);
  }
  
  return lateralNumbers;
}

export default getLateralNumbers