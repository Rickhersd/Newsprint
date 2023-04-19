<template>
  <div class="puzzleRow">
    <SudokuCell />
    <SudokuCell />
    <SudokuCell />
    <SudokuCell />
    <SudokuCell />
    <SudokuCell />
    <SudokuCell />
    <SudokuCell />
    <SudokuCell />
  </div>
</template>

<script lang="ts" setup>
  import SudokuCell from "./SudokuCell.vue";


</script>


<style scoped>
    .puzzleRow {
    width: 100%;
    height: calc(100% / 9);
    border: 0.5px solid #ffffff60;
    display: flex;
    }
</style>