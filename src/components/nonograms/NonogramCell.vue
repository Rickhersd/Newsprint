<template>
  <button
      class="nonogram-cell"
      :disabled="isReadOnly()"
      @click="(e) => editCell(e)"
    >
    <span v-if="cell.value === -1" class="nonogram-cell__X">X</span>
    <span v-if="cell.value === 0" class="nonogram-cell__empty"></span>
    <span v-if="cell.value === 1" class="nonogram-cell__filled"></span>
  </button>
</template>

<script lang="ts" setup>
  import { NonogramBoardType, NonogramCellType } from '../../types/SudokuTypes';

  const props = defineProps<{
    cell: NonogramCellType,
    editBoard: (position: number[], newValue: NonogramCellType) => void,
    initialBoard: NonogramBoardType,
    cellIndex: number,
    rowIndex: number,
    activeValue: number,
    toggleActive: (value: -1 | 0 | 1) => void,
  }>()

  const editCell = (e: MouseEvent) => {
    console.log('hola')
    if (e.button === 0) { 
      const newValue = props.cell.value != 0 ? 0 : 1;
      props.editBoard([props.rowIndex, props.cellIndex], {
        value: newValue,
        state: 'correct'
      }); 
    } else if (e.button === 2) { 
      const newValue = props.value != 0 ? -1 : 0;
      props.editBoard([props.rowIndex, props.cellIndex], {
        value: newValue,
        state: 'correct'
      });
    }   
    e.preventDefault();
  }

  function isReadOnly(){
    return props.initialBoard[props.rowIndex][props.cellIndex] === -1;
  }

</script>

<style lang='scss' scoped>
  .nonogram-cell {
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--light-border);
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 100%;
      height: 100%;
    }

    &__empty{
      background-color: transparent;
    }

    &__X{
      background-color: transparent;
    }

    &__filled{
      background-color: rgb(10 10 10);
    }

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

    span {
      font-weight: 200;
      font-size: 18px;
      color: var(--font-gray);
    }

    &:disabled span {
      font-weight: 800;
      color: var(--font-darkgray);
    }
  }

@media only screen and (min-width: 450px) {
  .nonogram-cel {
    

    span {
    
      font-size: 24px;
    
    }

  } 
}
</style>