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
import { SudokuBoardType } from '../../types/SudokuTypes';

  
  const props = defineProps<{
    value: number,
    editBoard: (position: number[], newValue: number) => void,
    completeBoard: SudokuBoardType,
    initialBoard: SudokuBoardType,
    cellIndex: number,
    rowIndex: number,
    activeValue: number,
    toggleActive: (value: number) => void,
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
  width: calc(100% / 9);
  border: 0.5px solid #252525;
  display: grid;
  place-content: center;
  background: var(--bg-teal);

    &:nth-child(3n) {
      border-right: 1px solid var(--font-teal);
    }

    &:hover {
      cursor: pointer;
      border: 1px solid #ffffff;
    }

    &:active {
      border: 1px solid var(--color-selected);
    }

    h1 {
      font-weight: 200;
      font-size: 24px;
      color: var(--font-teal);
    }

    :disabled h1 {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-selected-soft);
    }
  }
</style>