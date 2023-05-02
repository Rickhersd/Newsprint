<template>
  <div
    class="futoshiki__board"
    :style="{
      gridTemplateColumns: `repeat(${initialBoard.length}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${initialBoard.length}, minmax(0, 1fr))`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { FutoshikiBoardType, FutoshikiCellType, } from "../../types/FutoshikiTypes";

defineProps<{
  initialBoard: FutoshikiBoardType;
}>();

</script>

<style scoped lang="scss">
.futoshiki__board {
  width: calc(100% + 1px);
  aspect-ratio: 1/1;
  display: grid;
  box-sizing: content-box;
  border: 3px solid rgb(2 2 2);
}

.futoshiki .congrats {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  animation: fadeIn 1s;
}
.congrats h1 {
  font-size: 64px;
}
.congrats h4 {
  text-align: center;
}

h4:nth-child(3n) {
  color: var(--color-selected);
}

@media only screen and (min-width: 640px) {
  .futoshiki {
    width: 400px;
  }
}

@media only screen and (min-width: 1024px) {
  .futoshiki {
    width: 450px;
  }
}

@media only screen and (min-width: 1536px) {
  .futoshiki {
    width: 600px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
