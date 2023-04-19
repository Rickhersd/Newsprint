<template>
  <div class="sudoku-toolbar">
    <div class="sudoku-toolbar_tools">
      <button class="sudoku-toolbar_tools-undo">
        <v-icon icon="mdi-arrow-u-left-top"></v-icon>
      </button>
      <button class="sudoku-toolbar_tools-tips">
        <v-icon icon="mdi-eraser"></v-icon>
      </button>
      <button class="sudoku-toolbar_tools-tips">
        <v-icon icon="mdi-lightbulb-on-outline"></v-icon>
      </button>
    </div>
    <SudokuNumberSelector :activeValue="activeValue" :toggleActive="toggleActive" />
  </div>
</template>

<script lang="ts" setup>
  import SudokuNumberSelector from "./SudokuNumberSelector.vue";

  defineProps<{
    activeValue: number,
    toggleActive: (number:number) => void,
  }>()
  
</script>

<style scoped lang="scss">



.sudoku-toolbar{
  width: 100%;
  background-color: lightgray;

  &_tools{

    button { 

    }
  }
}
.sudoku-toolbar {
  background: var(--bg-teal-mute);
  width: 100%;
  border-top: 0.5px solid #ffffff80;
  display: flex;
  font-weight: 200;
  justify-content: center;
  align-items: center;
  gap: 24px;
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

@media only screen and (max-width: 600px) {
  .sudoku-toolbar {
    gap: 8px;
  }
}


</style>
