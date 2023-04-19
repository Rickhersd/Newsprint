<template>
  <div class="number-selector">
    <button
      class="number-selector_button"
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
  import { ref } from 'vue';
  
  const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  defineProps<{
    activeValue: number,
    toggleActive: (newActive:number) => void,
  }>()

</script>

<style scoped lang="scss">
.number-selector {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr)); 
  width: 80%;
  height: 48px;
  border: 0.5px solid #ffffff80;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &_button{
    background: none; 
    width: 100%;
    height: 100%;
    border: none;
    color: var(--font-teal);
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
.numberSelector img {
  filter: invert(87%) sepia(27%) saturate(151%) hue-rotate(306deg)
    brightness(103%) contrast(101%);
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
</style>
