<template>
  <div class="sudoku-toolbar">
    <div class="sudoku-toolbar__tools">
      <button class="sudoku-toolbar__tools-btn">
        <v-icon icon="mdi-arrow-u-left-top"></v-icon>
      </button>
      <button class="sudoku-toolbar__tools-btn">
        <v-icon icon="mdi-eraser"></v-icon>
      </button>
      <button class="sudoku-toolbar__tools-btn">
        <v-icon icon="mdi-lightbulb-on-outline"></v-icon>
      </button>
    </div>
    <NonogramFillSelector :activeOption="activeValue" :toggleActive="toggleActive" />
  </div>
</template>

<script lang="ts" setup>
  import NonogramFillSelector from "./NonogramFillSelector.vue";

  defineProps<{
    activeValue: -1 | 0 | 1,
    toggleActive: (number:-1 | 0 | 1) => void,
  }>()
  
</script>

<style scoped lang="scss">

.sudoku-toolbar {
  width: 100%;
  max-width: 300px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-direction: column;

  &__tools {


    &-btn {
      
    }
  }
}

.sudoku-toolbar .reset {
  width: 32px;
  height: 48px;
  aspect-ratio: 1/1;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reset .icon {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(106deg)
    brightness(105%) contrast(106%);
}

.reset .icon:hover {
  filter: invert(80%) sepia(58%) saturate(195%) hue-rotate(109deg)
    brightness(103%) contrast(102%);
  cursor: pointer;
}

@media only screen and (min-width: 640px) {

  .sudoku_board{
    width: 400px;
  }
}
</style>
