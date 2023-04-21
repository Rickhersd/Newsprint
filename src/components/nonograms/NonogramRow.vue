<template>
  <div class="nonogram-row"
    :style="{
      gridColumnStart: 1,
      gridColumnEnd: initialBoard.length + 1,
      gridTemplateColumns: columnNumber, 
    }"

  >
    <NonogramCell 
      v-for="(value, i) in rowData" 
      :key="i" 
      :value="value"
      :completedBoard="completeBoard"
      :rowIndex="rowIndex"
      :cellIndex="i"
      :editBoard="editBoard"
      :activeValue="activeValue"
      :toggleActive="toggleActive"
      :completeBoard="completeBoard"
      :initialBoard="initialBoard"
    />
  </div>
</template>
<script lang="ts" setup>
  import { SudokuBoard } from '../../types/SudokuTypes';
  import NonogramCell from './NonogramCell.vue';

  const props = defineProps<{
    rowData: (-1 | 0 | 1)[],
    rowIndex: number,
    activeValue: number,
    toggleActive: (value:-1 | 0 | 1) => void,
    completeBoard: SudokuBoard,
    initialBoard: SudokuBoard,
    editBoard: (position: number[], newValue: -1 | 0 | 1) => void
  }>()

  const columnNumber:string = `repeat(${props.initialBoard.length}, minmax(0, 1fr))`
  console.log(columnNumber)

</script>

<style scoped lang="scss">
.nonogram-row {
  width: calc(100%);
  height: 100%;
  border-bottom: 1px solid var(--light-border);
  display: grid;
  box-sizing: content-box;
  grid-template-columns: repeat(5, minmax(0, 1fr));
     
  &:nth-child(5n){
    border-bottom: 2px solid var(--middle-border);
  }
}

</style>