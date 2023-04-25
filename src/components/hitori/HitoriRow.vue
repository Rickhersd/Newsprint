<template>
  <div
    class="hitori-row"
    :style="{
      gridColumnEnd: hitoriBoard.length + 1,
      gridTemplateColumns: `repeat(${hitoriBoard.length}, minmax(0, 1fr))`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { HitoriBoardType } from "../../types/HitoriTypes";

defineProps<{
  hitoriBoard: HitoriBoardType
}>();

</script>

<style scoped lang="scss">

.hitori-row {
  width: calc(100%);
  height: 100%;
  border-bottom: 1px solid var(--light-border);
  display: grid;
  box-sizing: content-box;
  grid-column-start: 1;
}

</style>
