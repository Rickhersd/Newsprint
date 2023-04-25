<template >
  <div class="left-numbers__cont"
    :style="{
      gridTemplateRows: `repeat(${numberOfRows}, minmax(0, 1fr))`
    }"
  >
    <div v-for='pattern in rowPatterns' class="left-numbers__row">
      <div v-for='number in pattern' 
        class="left-numbers__number"
        :class="{
          'left-numbers__number-completed': number.state == 'completed'
        }"

      >
        {{number.value}}
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { NonogramPatterns } from '../../types/nonogramTypes'

  const props = defineProps<{
    rowPatterns: NonogramPatterns,  
  }>()

  const maxNumberOfItems = getMaxNumberOfItems(props.rowPatterns);
  const numberOfRows = props.rowPatterns.length; 

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

  .left-numbers{

    &__cont{
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      min-width: 100px;
 
    }

    &__row{ 
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      margin: 1px 0rem;
      background-color: lightgrey;
      border-radius: 0.5rem;
      border: 1px solid darkgrey;
    }

    &__number{
      font-size: 24px;
      justify-content: center;
      font-weight: 500;
      height: 100%;
      align-items: center;
      display: flex;
      aspect-ratio: 1/2;


      &-completed{
        color: green;
      }
    }
  }

</style>