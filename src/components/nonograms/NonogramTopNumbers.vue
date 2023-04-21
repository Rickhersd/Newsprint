<template >
  <div class="top-numbers__cont"
    :style="{
      gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${maxNumberOfItems}, minmax(0, 1fr))`
    }"
  >
    <div v-for='numbers in numberData' class="top-numbers__column"
      :style="{
        gridRowEnd: maxNumberOfItems + 1,
      }"
    >
      <div v-for='number in numbers' class="top-numbers__number">
        {{number}}
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { StyleValue } from 'vue';
  import getLateralNumbers from '../../utils/nonograms.ts/getLateralNumbers'
  import invertBiArray from '../../utils/nonograms.ts/invertBiArray';

  const props = defineProps<{
    completeBoard: (-1 | 0 | 1)[][], 
  }>()

  const invertedBoard = invertBiArray(props.completeBoard);
  const numberData = getLateralNumbers(invertedBoard)
  const maxNumberOfItems = getMaxNumberOfItems(numberData);
  const numberOfColumns = props.completeBoard.length; 

  function getMaxNumberOfItems(array: any[][]) {
  let maxNumberOfItems = 0;
  
  for (let i = 0; i < array.length; i++) {
    const numberOfItems = array[i].length;
    
    if (numberOfItems > maxNumberOfItems) {
      maxNumberOfItems = numberOfItems;
    }
  }
  
  return maxNumberOfItems;
}


</script>
<style lang="scss">

  .top-numbers{

    &__cont{
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      width: calc(100% - 100px);
      margin-left: auto;
    }

    &__column{ 
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      grid-row-start: 1;
      margin: 0rem 1px;
      background-color: lightgrey;
      border-radius: 0.5rem;
      border: 1px solid darkgrey;
    }

    &__number{
      font-size: 24px;
      justify-content: center;
      font-weight: 500;
      width: 100%;
      align-items: center;
      display: flex;
      aspect-ratio: 4/3; 
    }
  }

</style>