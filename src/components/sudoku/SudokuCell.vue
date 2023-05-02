<template>
  <button
    class="sudoku_cell"
    :class="{
      'sudoku_cell-wrong': (cellData.state === 'wrong' && showErrors === true ),
      'sudoku_cell-selected': selectedCell}"
    :disabled="cellData.readOnly"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <h1>{{ cellData.value === 0 ? '' : cellData.value }}</h1>
  </button>
</template>

<script lang="ts" setup>
  import { SudokuCellType, SudokuValidCellValues } from '../../types/SudokuTypes';
  import { PositionType } from '../../types/types'

  const props = defineProps<{
    cellData: SudokuCellType,
    selectedCell: boolean; 
    showErrors: boolean,
    cellIndex: number,
    rowIndex: number,
    activeValue: SudokuValidCellValues,
  }>()

  const emits = defineEmits<{
    (e: 'onEdit', position: PositionType, newValue: number):void
    (e: 'onSelect', rowIndex: number, cellIndex: number ):void
  }>()

  const handleClick = () => {
    emits('onEdit', {rowIndex: props.rowIndex, cellIndex: props.cellIndex}, props.activeValue)
    emits('onSelect', props.rowIndex, props.cellIndex);
  }

  const handleKeyDown = (event) => {
    const keyCode = event.keyCode || event.which;
    const value = String.fromCharCode(keyCode);
    if (value >= '1' && value <= '9') {
      emits('onEdit', {rowIndex: props.rowIndex, cellIndex: props.cellIndex}, parseInt(value, 10));
    }
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

    &-wrong{
      background-color: rgb(236, 141, 141);
    }

    &-selected{
      filter: grayscale(50%);
      background-color: red;
      cursor: pointer;
      z-index: 10;
      background-color: #ededed;
      border-color: #ededed;
      outline: 2px solid darkslategray;

    }

    &:hover {
      cursor: pointer;
      z-index: 10;
      background-color: #ededed;
      border-color: #ededed;
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