<template>
  <div class="nonogram-row"
    :style="{
      gridColumnStart: 1,
      gridColumnEnd: initialBoard.length + 1,
      gridTemplateColumns: `repeat(${initialBoard.length}, minmax(0, 1fr))`, 
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { NonogramBoardType } from '../../types/nonogramTypes';

defineProps<{
  initialBoard: NonogramBoardType, 
}>()

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