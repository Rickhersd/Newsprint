<template>
  <button
    class="sudoku_cell"
    :class="{'sudoku_cell-wrong': cellData.state === 'wrong'}"
    :disabled="cellData.readOnly"
    @click="() => editCell()"
  >
    <h1>{{ cellData.value === 0 ? '' : cellData.value }}</h1>
  </button>
</template>

<script lang="ts" setup>
  import { SudokuCellType, SudokuValidCellValues } from '../../types/SudokuTypes';

  const props = defineProps<{
    cellData: SudokuCellType,
    editBoard: (position: number[], newValue: SudokuCellType) => void,
    cellIndex: number,
    rowIndex: number,
    activeValue: SudokuValidCellValues,
  }>()

  function editCell(){
    console.log('editado')
    console.log(props.activeValue)
    props.editBoard(
      [props.rowIndex, props.cellIndex],
      {value: props.activeValue, readOnly: false, state: 'correct'}
    )
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