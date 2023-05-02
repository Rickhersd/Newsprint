<template >
  <div class="thumbnail-sudoku__board"
  	:style="{
      gridTemplateRows: `repeat(${gameboard.length}, minmax(0, 1fr))`,
      gridTemplateColumns: `repeat(${gameboard.length}, minmax(0, 1fr))`,
    }"
  >
    <div v-for="row in gameboard" class="thumbnail-sudoku__row"
    :style="{
      gridColumnEnd: gameboard.length + 1,
      gridTemplateColumns: `repeat(${gameboard.length}, minmax(0, 1fr))`,
    }">
      <div v-for="value in row" class="thumbnail-sudoku__cell">
        <h6 v-if="value !== 0">{{value}}</h6>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

  defineProps<{
    gameboard:number[][]  
  }>()

</script>

<style scoped lang="scss">

  .thumbnail-sudoku{

    &__board{
      width: calc(100% + 1px);
      aspect-ratio: 1/1;
      display: grid;
      box-sizing: content-box;
 
      border: 2px solid rgb( 2 2 2);
      box-shadow: 0 0 4px var(--font-teal-transparent);
    }

    &__row{
      width: calc(100%);
      height: 100%;
      grid-column-start: 1;
      border-bottom: 1px solid var(--light-border);
      display: grid;
      box-sizing: content-box;
    }

    &__cell{
      height: 100%;
      width: 100%;
      border-right: 1px solid var(--light-border);
      box-sizing: content-box;
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
    
</style>