<template #number-controller>
  <div class="number-selector">
    <button
      class="number-selector__button"
      v-for="number in numbers"
      :key="number"
      @click="() => toggleActive(number)"
    >
      <p v-if="activeValue === number" class="number-selector_button-selected">
        {{ numbers[number - 1] }}
      </p>
      <p v-else>{{ numbers[number - 1] }}</p>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { SudokuValidCellValues } from '../../types/SudokuTypes';
  
  const numbers:SudokuValidCellValues[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  defineProps<{
    activeValue: SudokuValidCellValues,
    toggleActive: (activeTarget:SudokuValidCellValues) => void,
  }>()

</script>

<style scoped lang="scss">

.number-selector {
  width: 100%;
  display: grid;
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  background-color: var(--i-secundary-color);
  border-radius: 1.5rem;
  aspect-ratio: 1/1;
  overflow: hidden;

  &__button{
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    border: none;
    color: black;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    :hover {
      background-color: darkgray;
    }

    &-seleted{
      font-size: 32px;
      font-weight: 500;
      color: blue;
    }
  }
}
  
.numberSelector .selection {
  font-weight: 200;
  width: calc(80% / 9);
  display: grid;
  place-content: center;
  font-size: 20px;
}
.numberSelector button:hover {
  font-size: 32px;
  color: var(--color-selected);
  color: red;
  cursor: pointer;
}
.numberSelector button:disabled {
  opacity: 0.6;
}
.numberSelector button:disabled:hover {
  font-size: 24px;
  color: var(--font-teal);
  cursor: default;
}

.numberSelector .erasing {
  filter: invert(62%) sepia(31%) saturate(888%) hue-rotate(295deg)
    brightness(99%) contrast(104%);
}

@media only screen and (max-width: 600px) {
  .numberSelector {
    width: 360px;
  }
  .numberSelector button {
    font-size: 20px;
  }
  .numberSelector .selection {
    width: 28px;
    height: 100%;
    border: none;
  }
}

@media only screen and (min-width: 640px) {

  .number-selector {
    max-width: 700px;
    width: 100%;
    /* height: 48px; */
    padding: 0rem 1rem;
    border-radius: 3rem;
    aspect-ratio: auto;
    /* border: 0.5px solid rgba(255, 255, 255, 0.5019607843); */
    display: flex;
    overflow: auto;
    align-items: center;
    justify-content: center;

    &__button{
      width: 50px;
      height: 50px;
    }
  }

}
</style>
