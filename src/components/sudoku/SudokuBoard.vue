<template>
  <div class="puzzleBoard">
    <PuzzleRow />
    <PuzzleRow />
    <PuzzleRow />
    <PuzzleRow />
    <PuzzleRow />
    <PuzzleRow />
    <PuzzleRow />
    <PuzzleRow />
    <PuzzleRow />
  </div>
</template>

<script>
import PuzzleRow from "./PuzzleRow.vue";
  export default {
    name: "PuzzleBoard",
    components: {
      PuzzleRow,
    },
  };
</script>

<style scoped>
  .puzzleBoard {
  width: 400px;
  aspect-ratio: 1/1;
  background: #ffffff20;
  display: flex;
  flex-wrap: wrap;
  }
</style>
