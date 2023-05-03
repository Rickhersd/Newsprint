<template>
  <div>
  	<h1>Algoritmos del Sudoku</h1>
  	<p>El sudoku es uno de puzzles mas fáciles de desarrollar y al ser uno de los maś conocidos, es el punto de partida idóneo para mejorar la logica de programacion a partir de puzzles de lógica</p>
  	<h2>Estructura de los datos</h2>
  	<p>Un tablero de sudoku esta formado por una cuadrícula de 9x9, la cual podemos representar mediante de un arreglo bidimensional como el que se presenta a continuación:</p>
    <HighCode
    class='code'
    :lang='"javascript"'
    :theme='"light"'
    :height='"auto"'
    :langName='" "'
    :fontSize="'16px'"   
    :borderRadius="'0px'"
    :copy='false'
    :width="'450px'"
    :codeValue="`const tablero = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
]
 `"></HighCode> 
  	<p>En este arreglo bidimensional se representan las nueve filas del tablero y cada una de estas, tiene nueve items que representarán las casillas. Las casillas solo se admitirán valores del 0 al 9, en donde el 0 representa una casilla vacía y los números del 1 al 9 los valores que iremos ingresando.</p>	
  	<p>Esta es la forma más simple de recrear un Sudoku, y es válida para hacer un juego funcional. Sin embargo, tambien es muy limitante y no permite tener un control total respecto al estado de las casillas. Es por ellos, que de ahora en adelante, en lugar de números, se usarán objetos con la siguiente estructura:</p>
   <HighCode
    class='code'
    :lang='"javascript"'
    :theme='"light"'
    :height='"auto"'
    :langName='" "'
    :fontSize="'16px'"   
    :borderRadius="'0px'"
    :copy='false'
    :width="'450px'"
    :codeValue="`const Cell = {
      valor: 0  // number 
      estado: 'empty' // string
      readonly: 'false' // boolean
}
 `"></HighCode> 
   <p>En este objeto: el valor irá del 0 al 9, y será el actual valor de casilla; el estado será un string, y podrá ser "ok", "wrong", "empty". Gracias a esta estructura, podremos manipular con más libertad las casillas dependiendo de su estado. Por ejemplo, si se esta desarrollando un juego con interfaz gráfica, el estado 'wrong' podrá indicarle a la casilla que debe pintarse de color rojo. </p>
   <p>Nota: manejar esta estructura de tablero es mejor para el funcionamiento interno del sudoku, pero también será muy díficil crear nuevos puzzles se si van a crear los puzzles manualmente. Por ello, al final de esta guía podrás encontrar la implementacíon de una función que a partir de un arreglo bidimensional de sólo números, podemos generar un tablero con la estrutura de objetos.</p>
  	<h2>Función validadora</h2>
   <p>Esta funcion será la base, Aqui vamos a ejecutrar una seria de funciones . Para saber como estructurar esta funcion, debemos pensar en las reglas del sudoku para desarrollar funciones mas pequeñas:</p>
   <p>En un principio, un sudoku debe cumplir los siguiente:</p>
  	<ul>
  		<li>No deben haber números repetidos en ninguna columna</li>
  		<li>No deben haber números repetidos en nignuna fila</li>
  		<li>No deben haber números repetidos en ningun subcuadricula de 3x3</li>
  	</ul>
  	<p>A partir de aquí, podemos deducir que necesitamos desarrollar tres funciones indepedientes, las cuales invocaremos en la funcion validadora. En adicion, también usaremos dos función auxiliares, una llamada SerAllCorrect() para establecer todas las casillas a "ok", y otras checkAllCorrect() para verificar si todas las casillas estan "ok".</p>
   <p>La función quedaría así:</p>
   <HighCode
    class='code'
    :lang='"javascript"'
    :theme='"light"'
    :height='"auto"'
    :langName='" "'
    :fontSize="'16px'"   
    :borderRadius="'0px'"
    :copy='false'
    :width="'450px'"
    :codeValue="`function validateSudoku(tablero){
   setAllCorrect();

   checkColumns();
   checkRows();
   checkBoxes();

   return checkAllCorrect();
}
 `"></HighCode>
  	<h3>¿Por qué se asume todo a correcto al inicio?</h3>    
  	<p>La lógica detrás de esto es que el algoritmo irá ejecuntando las funciones checker en orden, y estas se encargarán de validar los diferentes aspectos del puzzles, y en caso de encontrar aĺgún error en alguna casilla, cambiará el estado de ésta a "wrong". Al final, la última función checkAllCorrect() verificará si todas las casillas continuan "ok" o no, y dependiendo del resultado, retornará un boolean que nos indicará si el tablero está correcto o no.</p>
  	<h3>Verificar filas</h3>
  	<p>Esta es la funcion mas simple de todas. Solo debemos recorrer cada arreglo que simula ser una fila, y ir verificando uno de estos valores</p>
    <HighCode
    class='code'
    :lang='"javascript"'
    :theme='"light"'
    :height='"auto"'
    :langName='" "'
    :fontSize="'16px'"   
    :borderRadius="'0px'"
    :copy='false'
    :width="'450px'"
    :codeValue="`function countElementsRow(row: GameBoardRow<GameBoardCell<number>>): {[key: string | number]: number } {
  const result: { [key: string | number]: number } = {};
  row.forEach((cell) => {
    result[cell.value] = (result[cell.value] || 0) + 1;
  });
  return result;
}

export function invertGameBoard(gameBoard: GameBoard<GameBoardCell<any>>): GameBoard<GameBoardCell<any>> {
  const rows = gameBoard.length;
  const columns = gameBoard[0].length;
  const invertedArray = [];

  for (let j = 0; j < columns; j++) {
    const invertedRow = [];
    for (let i = 0; i < rows; i++) {
      invertedRow.push(gameBoard[i][j]);
    }
    invertedArray.push(invertedRow);
  }

  return invertedArray;
}

 `"></HighCode>

  	<h3>Verificar Columnas</h3>
  	<p>En el caso de las filas, fue sencillo verificar si habian numeros repetidos ya que el grupo de numeros estaba en el mismo arreglo. Pero en el caso de las columnas, cada Arreglo. Por ello, primero deben estraer las columnas en un nuevo. Para ello, los mas simples es invertir las columnas y las filas, o lo que es matematicamente hablando, hallar las matriz transpuesta del arreglo bidimensional.</p>
  	<p>Luego de obtener las matriz transpuesta, invocamos la funcion pero inregre</p>
    <HighCode
    class='code'
    :lang='"javascript"'
    :theme='"light"'
    :height='"auto"'
    :langName='" "'
    :fontSize="'18px'"   
    :borderRadius="'0px'"
    :copy='false'
    :width="'450px'"
    :codeValue="`const casilla = {
  valor: 0,
  estado: 'vacio'
}
 `"></HighCode>
  	<h3>Verificar Subcuadriculas de 3x3</h3>
  	<p> Aqui haremos lo mismo, necestamos crear un nuevo, pero en este caso cada fila seran los valores de cada subcuadricula de 3x3 de las, y este nuevo arreglo bidimensional lo ingresaremos como parametro dentro de la funcion que verifica las filas.</p>
    <HighCode
    class='code'
    :lang='"javascript"'
    :theme='"light"'
    :height='"auto"'
    :langName='" "'
    :fontSize="'16px'"   
    :borderRadius="'0px'"
    :copy='false'
    :width="'450px'"
    :codeValue="`const casilla = {
  valor: 0,
  estado: 'vacio'
}
 `"></HighCode>
  	<h2>Funcion final</h2>
  	<h2>Ejemplo de codigo para verificar</h2>
  	<p>Cómo desarrollar la parte gráfica ya supone un reto por si solo, en mi <a href=''>blog personal</a> podrás encontrar un artículo el cual explica a detalle cómo crear el tablero de juego utilizando Vue.</p>
  	<p>Este proyecto es meramente educativo y documentar toda lo, asi que se te gusto aprender sobre esto y quieres, no dude en darle una estrellina en mi repositorio de Github.</p>    
  </div>
</template>

<script lang="ts" setup>
import { FutoshikiBoardType } from "../../types/FutoshikiTypes";
  
import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
</script>

<style scoped lang="scss">

.futoshiki__row {
  width: calc(100%);
  height: 100%;
  display: grid;
  box-sizing: content-box;
  grid-column-start: 1;
}

</style>
