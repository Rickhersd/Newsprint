<template>
  <button
    class="sudoku_cell"
    :class="{
      'sudoku_cell-wrong': (cellData.state === 'wrong' && showErrors === true ),
      'sudoku_cell-selected': ( rowIndex == selectedCell.y && cellIndex == selectedCell.x),
      'sudoku_cell-auxiliar': ( !(rowIndex == selectedCell.y && cellIndex == selectedCell.x) && auxiliarCell)
    }"
    :disabled="cellData.readOnly"
    @click="handleClick"
    >
    <h1>{{ cellData.value === 0 ? '' : cellData.value }}</h1>
  </button>
</template>

<script lang="ts" setup>
  import { SudokuCellType, SudokuValidCellValues } from '../../types/SudokuTypes';

  const props = defineProps<{
    cellData: SudokuCellType,
    selectedCell: {x: number, y: number};
    auxiliarCell: boolean; 
    showErrors: boolean,
    cellIndex: number,
    rowIndex: number,
    activeValue: SudokuValidCellValues,
  }>()

  const emits = defineEmits<{
    (e: 'onSelect', rowIndex: number, cellIndex: number ):void
  }>()

  const handleClick = () => {
    emits('onSelect', props.rowIndex, props.cellIndex);
  }

</script>

<style lang='scss' scoped>
  .sudoku_cell {
    height: 100%;
    width: 100%;
    background-color: var(--main-bg);
    border-right: 1px solid var(--light-border);
    box-sizing: brder-box;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(3n) {
      border-right: 2px solid var(--middle-border);
    }

    &:last-child {
      border-right: 2px solid transparent;
    }

    &-selected{
      filter: contrast(0.7);
      cursor: pointer;
      z-index: 10;
      border-color: #ededed;
      
    }

    &-auxiliar{
      filter: contrast(0.9);
    }

    &:focus {
      outline: none;
    }

    h1 {
      font-weight: 500;
      font-size: 18px;
      color: var(--font-gray);
      transition: color 0.3s ease;
      
    }

    &:disabled h1 {
      font-weight: 800;
      color: var(--font-darkgray);
    }

    &-wrong h1{
      // background-color: rgb(236, 141, 141);
      color: rgb(236, 90, 90);
    }

    &-wrong:disabled h1{
      // background-color: rgb(236, 141, 141);
      color: rgb(236, 50, 50);
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