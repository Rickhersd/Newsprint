<template>
  <div
    class="hitori-board"
    :style="{
      gridTemplateColumns: `repeat(${hitoriBoard.length}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${hitoriBoard.length}, minmax(0, 1fr))`,
    }"
  > 
    <slot></slot>    
  </div>
</template>

<script lang="ts" setup>
import { HitoriBoardType } from "../../types/HitoriTypes";

const props = defineProps<{
  hitoriBoard: HitoriBoardType;
}>();

</script>

<style scoped lang="scss">

.hitori-board {
  width: calc(100% + 1px);
  max-width: 500px;
  aspect-ratio: 1/1;
  display: grid;
  box-sizing: content-box;
  border: 3px solid rgb(2 2 2);
}


@media only screen and (min-width: 640px) {
  .hitori {
    width: 400px;
  }
}

@media only screen and (min-width: 1024px) {
  .hitori {
    width: 450px;
  }
}

@media only screen and (min-width: 1536px) {
  .hitori {
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
