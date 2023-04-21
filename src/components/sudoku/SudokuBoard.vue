<template>
  <div class="sudoku_board">
    <div v-for="(row, rowIndex) in gameBoard" class="sudoku_row" :key="rowIndex">
      <SudokuCell 
        v-for="(digit, cellIndex) in row" 
        :key="cellIndex" 
        :value="digit"
        :rowIndex="rowIndex"
        :cellIndex="cellIndex"
        :editBoard="editBoard"
        :activeValue="activeValue"
        :toggleActive="toggleActive"
        :completeBoard="completeBoard"
        :initialBoard="initialBoard"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Ref } from "vue";
import { RegisterStack } from "../../ts/useHistory";
  import { SudokuBoardType, SudokuCellType } from "../../types/SudokuTypes";
  import SudokuCell from "./SudokuCell.vue";
 
  defineProps<{
    completeBoard: SudokuBoardType,
    initialBoard: SudokuBoardType,
    gameBoard: SudokuBoardType,
    activeValue: SudokuCellType,
    editBoard: (position: number[], newValue: SudokuCellType) => void,
    toggleActive: (input: SudokuCellType) => void
  }>()
  
</script>

<style scoped lang="scss">
.sudoku_board {
  width: calc(100% + 1px);
  aspect-ratio: 1/1;
  display: grid;
  box-sizing: content-box;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-template-rows: repeat(9, minmax(0, 1fr));
  border: 3px solid rgb( 2 2 2);
  box-shadow: 0 0 4px var(--font-teal-transparent);
}

.sudoku_row {
  width: calc(100%);
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 10;
  border-bottom: 1px solid var(--light-border);
  display: grid;
  box-sizing: content-box;
  grid-template-columns: repeat(9, minmax(0, 1fr));

  &:nth-child(3n){
    border-bottom: 2px solid var(--middle-border);
  }
}
.sudoku_board .congrats {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  animation: fadeIn 1s;
}
.congrats h1 {
  font-size: 64px;
}
.congrats h4 {
  text-align: center;
}

h4:nth-child(3n) {
  color: var(--color-selected);
}

@media only screen and (min-width: 640px) {

  .sudoku_board{
    width: 400px;
  }
}

@media only screen and (min-width: 1024px) {

.sudoku_board{
  width: 450px;
}
}

@media only screen and (min-width: 1536px) {

  .sudoku_board{
    width: 600px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
