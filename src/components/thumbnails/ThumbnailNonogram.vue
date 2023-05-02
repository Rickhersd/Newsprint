<template >
  <div class="thumbnail-nonogram__board">
    <div v-for="row in gameboard" class="thumbnail-nonogram__row">
      <div v-for="value in row" class="thumbnail-nonogram__cell">
        <span v-if="value === -1" class="thumbnail-nonogram__cell-X">X</span>
        <span v-if="value === 0" class="thumbnail-nonogram__cell-empty"></span>
        <span v-if="value === 1" class="thumbnail-nonogram__cell-filled"></span>
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

  .thumbnail-nonogram{

    &__board{
      width: calc(100% + 1px);
      aspect-ratio: 1/1;
      display: grid;
      box-sizing: content-box;
      grid-template-columns: repeat(15, minmax(0, 1fr));
      grid-template-rows: repeat(15, minmax(0, 1fr));
      border: 2px solid rgb( 2 2 2);
      box-shadow: 0 0 4px var(--font-teal-transparent);
    }

    &__row{
      width: calc(100%);
      height: 100%;
      grid-column-start: 1;
      grid-column-end: 16;
      border-bottom: 1px solid var(--light-border);
      display: grid;
      box-sizing: content-box;
      grid-template-columns: repeat(15, minmax(0, 1fr));

      &:nth-child(5n){
        border-bottom: 1px solid var(--middle-border);
      }

      &:last-child{
        border-bottom: none;
      }
    }

    &__cell{
      height: 100%;
      width: 100%;
      border-right: 1px solid var(--light-border);
      box-sizing: content-box;
      display: flex;
      align-items: center;
      justify-content: center;

      span{
        width: 100%;
        height: 100%;
      }

      &:nth-child(5n) {
        border-right: 1px solid var(--middle-border);
      }

      &:last-child{
        border-right: none;
      }

      &-empty{
      background-color: transparent;
    }

      &-X{
        background-color: transparent;
      }

      &-filled{
        background-color: rgb(10 10 10);
      }
    }
  }
    
</style>