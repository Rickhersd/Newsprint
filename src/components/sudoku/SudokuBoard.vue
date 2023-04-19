<template>
  <div class="sudoku_board">
    <SudokuRow
      v-for="(row, i ) in completeBoard"
      :key="completeBoard.indexOf(row)"
      :rowData="row"
      :rowIndex="i"
      :activeValue="activeValue"
      :editBoard="editBoard"
      :completeBoard="completeBoard"
      :intialBoard="initialBoard"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<script lang="ts" setup>
  import { SudokuBoardType } from "../../types/SudokuTypes";
import SudokuRow from "./SudokuRow.vue";
 
  defineProps<{
    completeBoard: SudokuBoardType,
    initialBoard: SudokuBoardType,
    activeValue: number,
    editBoard: (position: number[], newValue:number) => void,
    toggleActive: (input: number) => void
  }>()
  

</script>

<style scoped>
.sudoku_board {
  width: 400px;
  aspect-ratio: 1/1;
  background: #ffffff20;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 4px var(--font-teal-transparent);
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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
