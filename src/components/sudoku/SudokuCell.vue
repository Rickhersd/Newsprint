<template>
  <button
    class="sudoku_cell"
    :disabled="isReadOnly()"
    @click="() => editCell()"
  >
    <h1>{{ value === 0 ? '' : value }}</h1>
  </button>
</template>

<script lang="ts" setup>
  import { SudokuBoardType, SudokuCellType } from '../../types/SudokuTypes';

  const props = defineProps<{
    value: number,
    editBoard: (position: number[], newValue: SudokuCellType) => void,
    initialBoard: SudokuBoardType,
    cellIndex: number,
    rowIndex: number,
    activeValue: SudokuCellType,
    toggleActive: (value: SudokuCellType) => void,
  }>()

  function editCell(){
    if (props.activeValue) {
      props.editBoard([props.rowIndex, props.cellIndex], props.activeValue);
    } else if (props.activeValue === 0) {
      props.editBoard([props.rowIndex, props.cellIndex], 0);
    } else {
      console.error(new Error("No number has been selected"));
    }
  }

  function isReadOnly(){
    return props.initialBoard[props.rowIndex][props.cellIndex] != 0;
  }

</script>

<style lang='scss' scoped>
  .sudoku_cell {
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--light-border);
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(3n) {
      border-right: 2px solid var(--middle-border);
    }

    &:hover {
      cursor: pointer;
      z-index: 10;
      background-color: #ededed;
      border-color: #ededed;
      outline: 2px solid darkslategray;
    }

    &:active {
      outline: 2px solid darkslategray;
    }

    h1 {
      font-weight: 200;
      font-size: 18px;
      color: var(--font-gray);
    }

    &:disabled h1 {
      font-weight: 800;
      color: var(--font-darkgray);
    }
  }

@media only screen and (min-width: 450px) {
  .sudoku_cell {
    

    h1 {
    
      font-size: 24px;
    
    }

  } 
}
</style>