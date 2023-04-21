<template>
  <div class="nanogram-board"
    :style="{
      gridTemplateColumns: `repeat(${initialBoard.length}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${initialBoard.length}, minmax(0, 1fr))`
    }"
  >
    <NonogramTopNumbers
      :completeBoard="completeBoard"
    />
    <div class="nanogram-board__cont">
      <NonogramLeftNumbers
        :completedBoard="completeBoard"
      />
      <div class="nanogram-board__board">
        <NonogramRow
          v-for="(row, i ) in completeBoard"
          :key="completeBoard.indexOf(row)"
          :rowData="row"
          :rowIndex="i"
          :activeValue="activeValue"
          :editBoard="editBoard"
          :completeBoard="completeBoard"
          :initialBoard="initialBoard"
          :toggleActive="toggleActive"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import NonogramRow from "./NonogramRow.vue";
  import NonogramTopNumbers from './NonogramTopNumbers.vue';
  import NonogramLeftNumbers from './NonogramLeftNumbers.vue';
 
  defineProps<{
    completeBoard: (-1 | 0 | 1)[][],
    initialBoard: (-1 | 0 | 1)[][],
    activeValue: -1 | 0 | 1,
    editBoard: (position: number[], newValue: -1 | 0 | 1) => void,
    toggleActive: (input: -1 | 0 | 1) => void
  }>()

</script>

<style scoped lang='scss'>
.nanogram-board{

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
.nanogram-board .congrats {
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

  .nanogram-board{
    width: 400px;
  }
}

@media only screen and (min-width: 1024px) {

.nanogram-board{
  width: 450px;
}
}

@media only screen and (min-width: 1536px) {

  .nanogram-board{
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
