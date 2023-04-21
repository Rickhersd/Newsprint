<template>
  <div class="fill-selector">
    <button
      class="fill-selector__button"
      v-for="option in fillOptions"
      :key="option.value"
      @click="() => toggleActive(option.value)"
    >
      <p v-if="activeOption === option.value" class="fill-selector__button-selected">
        {{ option.label }}
      </p>
      <p v-else>
        {{ option.label }}
      </p>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  
  type fillOption = { 
    value: -1 | 0 | 1;
    label: string;  
  }

  const fillOptions:fillOption[] = [
    {value: -1, label: 'X'},
    {value: 0, label: 'Erase'},
    {value: 1, label: 'Fill'}
  ]

  defineProps<{
    activeOption: -1 | 0 | 1,
    toggleActive: (newActive:-1 | 0 | 1) => void,
  }>()

</script>

<style scoped lang="scss">
.fill-selector {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  background-color: lightgray;
  border-radius: 2rem;

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

@media only screen and (min-width: 640px) {

  .fill-selector {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    max-width: 450px;
    width: 100%;
    /* height: 48px; */
    padding: 0rem 1rem;
    background-color: lightgray;
    border-radius: 3rem;
    /* border: 0.5px solid rgba(255, 255, 255, 0.5019607843); */
    border-radius: full;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}
</style>
