<template>
  <div class="sudoku_row">
    <button>
      <v-icon icon="mdi-eraser"></v-icon>
    </button>
    <SudokuCell 
      v-for="(digit, i) in rowData" 
      :key="i" 
      :value="digit"
      :completedBoard="completeBoard"
      :rowIndex="rowIndex"
      :cellIndex="i"
      :editBoard="editBoard"
      :activeValue="activeValue"
      :toggleActive="toggleActive"
      :completeBoard="completeBoard"
      :initialBoard="intialBoard"
    />
  </div>
</template>
<script lang="ts" setup>
  import { SudokuBoardType } from '../../types/SudokuTypes';
import SudokuCell from './SudokuCell.vue';

  defineProps<{
    rowData: number[],
    rowIndex: number,
    activeValue: number,
    toggleActive: (value:number) => void,
    completeBoard: SudokuBoardType,
    intialBoard: SudokuBoardType,
    editBoard: (position: number[], newValue:number) => void
  }>()

</script>

<style scoped>
.sudoku_row {
  width: 100%;
  height: calc(100% / 9);
  border: 0.5px solid var(--font-teal-transparent);
  display: flex;
}
.sudoku_row:nth-child(3n) {
  border-bottom: 1px solid var(--font-teal);
}
</style>