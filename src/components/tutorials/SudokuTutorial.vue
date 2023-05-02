<template>
  <div>
  	<h1>El Sudoku</h1>
  	<p>El Sudoku es un juego de números que se ha convertido en uno de los pasatiempos más populares del mundo. Su origen se remonta a la década de 1970, cuando el diseñador de rompecabezas Howard Garns creó un juego llamado "Number Place" en la revista estadounidense Dell Magazines. Aunque el juego se popularizó en Japón en la década de 1980 y se le dio el nombre de Sudoku, su auge mundial no llegó hasta la década de 2000. Hoy en día, el Sudoku se encuentra en periódicos, revistas y libros de pasatiempos en todo el mundo, y es un desafío mental emocionante y adictivo para personas de todas las edades.</p>
  	<h2>Instrucciones</h2>
  	<ul>
  		<li>El Sudoku se juega en una cuadrícula de 9x9, dividida en nueve subcuadrículas de 3x3.</li>
  		<li>El objetivo del juego es rellenar la cuadrícula con números del 1 al 9, de modo que cada fila, columna y subcuadrícula de 3x3 contenga todos los números del 1 al 9. Los números solo pueden aparecer una vez en cada fila, columna y subcuadrícula de 3x3, lo que significa que no se pueden repetir números en una misma fila, columna o subcuadrícula de 3x3.</li>
  		<li>Cada cuadrícula inicialmente tendrá algunos números ya colocados. Estos números se denominan "pistas" y su cantidad puede variar dependiendo de la dificultad.</li>
  		<li>El juego termina cuando se completan todas las casillas de la cuadrícula con los números correctos y sin errores. Si se cometió algún error, la cuadrícula lo reflejará pintando las casillas en color rojo.
  		</li>
  	</ul>
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
