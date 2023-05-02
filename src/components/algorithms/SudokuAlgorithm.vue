<template>
  <div>
  	<h1>Algoritmos del Sudoku</h1>
  	<p>El sudoku es uno de puzzles mas faciles de crear y puede ser buen puento de pracitca par aniciante en la progrmaccion </p>
  	<h2>Estructura de los Datos</h2>
  	<p>Un tablero de Sudoku costa de una cuadrícula de 9x9, la cual se puede representar a través de un arreglo bidimensional con la siguiente escructura</p>
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
  	<p>Este arreglo bidimensional solo admiten valores del 0 al 9. El 0 representa una casilla vacía y de los números del 1 al 9 con los que se puede rellenar la tablero.</p>	
    <p></p>
  	<p>Esta es la forma más simple de recrear un Sudoku, y es válida si se quiere crear un juego funcional. Sin embargo, tambien es muy limitante y no permite tener un control total respecto al estado de las casillas. Es por eso, que de ahora en adelante en lugar de usar números, estos se replazarán por objetos con la siguiente estructura:</p>
  	<p>Aqui tenemos el mismo arreglo bidimensional, pero en lugar de usar valores numeros del 0 al 9, almacenamos un objeto. Cada uno de estos objetos va a contener los siguientes propiedades</p>
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
    <p>En este objeto, el valor podra igualmente ir del 0 al nueve, pero al tener la propiedad estado, podremos manipular con mas libertad las casillas depdiendo de su estado. Por ejemplo, si el estado es 'wrong', porque ocurrio un error en el tablero, podremos representarlo con la color rojo.</p>
    <p>Los estados que admitira el sudoku seran tres: 'ok' cuando la casilla este correcta, 'wrong', si detecta algun error, y 'empty', en caso de que hayan casillas vacias</p>
  	<h2>Esctructura del validador</h2>

  	<ul>
  		<li>No se deben repetir ninguna columna</li>
  		<li>No deben haber numeros repetidos en nignuna fila</li>
  		<li>No deben haber numeros repetidos en ningun subcuadricula de 3x3</li>
  		<li></li>
  	</ul>
  	<p>A partir de aqui, podemos desarrollar </p>

  	<h2>Validador</h2>
  	<p>La funcion para validar tendra la siguiente estructura. Va recibir como argumentos el arreglo. Como esta es una fucnion compleja y que internamente hace muchos casos. La primera funcion</p>
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
  	<ul>
  		<li>El primer paso es establer el estado de todas las casillas a 'ok'</li>
  		<li>Luego se procede a validar todas las filas</li>
  		<li>Luego se validan todas las columnas</li>
  		<li>No deben haber numeros repetidos en ningun subcuadricula de 3x3</li>
  		<li>Se verfica el estado de las casillas</li>
  	</ul>
  	<p>La logica de esta estructura es la siguiente: cuando se invoca esta funcion, se asume que todo el puzzle esta correcto, por lo que se establecen todas casillas en 'ok'. Luego validan los aspectos del puzzles. Estas funciones no retornan nada, la idea de estas es que si encuentran algun error, estableeran el valor de las casillas en wrong. Por ultimo, cuando se halla verificado todo. La ultima funcion invocara verificara, solo en el caso de que todas las celdas continuen siendo 0k, la funciona retornara True, de los contrario devolvera false.</p>
  	<p>La razon de establecer todo a ok desde un inicio es porque las funciones de validacion solo tendran la capacidad de establecer el estado a wrong, y a ok. Esto para que ninguna funcion pueda alteral la respuesta que dio otra funcion validora. Pordria darse </p>
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
    :codeValue="`const casilla = {
  valor: 0,
  estado: 'vacio'
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
