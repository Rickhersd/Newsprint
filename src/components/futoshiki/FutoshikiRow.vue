<template>
  <div
    class="futoshiki__row"
    :style="{
      gridColumnEnd: initialBoard.length + 1,
      gridTemplateColumns: `repeat(${initialBoard.length}, minmax(0, 1fr))`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { FutoshikiBoardType } from "../../types/FutoshikiTypes";
  
const props = defineProps<{
  initialBoard: FutoshikiBoardType;
}>();

</script>

<style scoped lang="scss">

.futoshiki__row {
  width: calc(100%);
  height: 100%;
  display: grid;
  box-sizing: content-box;
  grid-column-start: 1;
}

</style>
