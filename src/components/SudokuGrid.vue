<template>
  <div id="app">
    <h1>Sudoku</h1>
    <div class="">
      <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="sudoku-row">
        <div v-for="(cell, cellIndex) in row" :key="cellIndex" class="sudoku-cell">
          <input type="text" :value="cell.value" :readonly="cell.readOnly" :class="{'invalid': cell.invalid}" @input="(event) => onInput(rowIndex, cellIndex, event)">
        </div>
      </div>
    </div>
    <button @click="resetGrid">Reset</button>
    <button @click="solveGrid">Solve</button>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  type sudokuCell = { value: '', readOnly: false, invalid: false }
  type sudokuRow = sudokuCell[]
  type sudokuGrid = sudokuRow[]

  const sodukoGrid = reactive([
  [

    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
    { value: '', readOnly: false, invalid: false },
  ],
  ...
  ]);

    function onInput(rowIndex, cellIndex, event) {
      const value = event.target.value;

      // Aquí puedes implementar la lógica de validación de los valores ingresados en las celdas del sudoku

      grid[rowIndex][cellIndex].value = value;
    }

    function resetGrid() {
      // Aquí puedes implementar la lógica para reiniciar el juego
      grid.forEach((row) => {
        row.forEach((cell) => {
          cell.value = '';
          cell.invalid = false;
        });
      });
    }

    function solveGrid() {
      // Aquí puedes implementar la lógica para resolver automáticamente el juego
    }

    return {
      grid,
      onInput,
      resetGrid,
      solveGrid,
    };
  },
};
</script>
