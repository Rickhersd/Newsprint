<template>
  <div class="sudoku_row">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">

.sudoku_row {
  width: calc(100%);
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 10;
  border-bottom: 1px solid var(--light-border);
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(9, minmax(0, 1fr));

  &:nth-child(3n){
    border-bottom: 2px solid var(--middle-border);
  }

  &:nth-last-child(2) {
    border-bottom: none
  }

}

</style>