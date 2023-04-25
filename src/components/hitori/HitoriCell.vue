<template>
  <button 
    class="hitori-cell"
    :class="{
      'hitori-cell__wrong': cell.state === 'wrong',
      'hitori-cell__inactive' : cell.state === 'inactive',
      'hitori-cell__inactive-wrong': (cell.state === 'wrong' && cell.value < 0)
    }" 
    @click="editCell"
  >
    <h1 v-if="cell.value > 0">{{ cell.value }}</h1>
  </button>
</template>

<script lang="ts" setup>
import { HitoriCellType, HitoriBoardType } from "../../types/HitoriTypes";

const props = defineProps<{
  cell: HitoriCellType;
  editBoard: (position: number[], newValue: HitoriCellType) => void;
  initialHitoriBoard: HitoriBoardType;
  cellIndex: number;
  rowIndex: number;
}>();

const editCell = (e: MouseEvent) => {

  const newValue = props.cell.value != -1 ? -1 : props.initialHitoriBoard[props.rowIndex][props.cellIndex].value;
  props.editBoard(
    [props.rowIndex, props.cellIndex],
    {value: newValue, state: 'correct', connectionKey: 0}
   );
  e.preventDefault();
};

</script>

<style lang="scss" scoped>

.hitori-cell {
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--light-border);
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &__inactive {
    background-color: rgb(10 10 10);
  }

  &__wrong {
    background-color: rgb(236, 141, 141);
  }

  &__inactive-wrong {
    background-color: red;
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

}

@media only screen and (min-width: 450px) {
  .Hitori-cell {
    span {
      font-size: 24px;
    }
  }
}
</style>
