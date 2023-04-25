<template>
  <div class="nonogram-board">
    <NonogramTopNumbers :colPatterns="colPatterns"/>
    <div class="nonogram-board__cont">
      <NonogramLeftNumbers :rowPatterns="rowPatterns" />
      <div class="nonogram-board__board">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import NonogramTopNumbers from './NonogramTopNumbers.vue';
  import NonogramLeftNumbers from './NonogramLeftNumbers.vue';
  import { NonogramPatterns, NonogramValidCellType } from '../../types/nonogramTypes'
 
  defineProps<{
    rowPatterns: NonogramPatterns,
    colPatterns: NonogramPatterns,
  }>()

</script>

<style scoped lang='scss'>
.nonogram-board{

  &__cont{
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }

  &__board{
    width: calc(100% + 1px);
    aspect-ratio: 1/1;
    display: grid;
    box-sizing: content-box;
    border: 3px solid rgb( 2 2 2);
  }

}
.nonogram-board .congrats {
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

  .nonogram-board{
    width: 400px;
  }
}

@media only screen and (min-width: 1024px) {

.nonogram-board{
  width: 450px;
}
}

@media only screen and (min-width: 1536px) {

  .nonogram-board{
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
