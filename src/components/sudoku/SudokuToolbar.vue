<template>
  <div class="sudoku-toolbar">
 
     <!-- <div class="sudoku-toolbar__tools-history">
        <button class="sudoku-toolbar__tools-btn " @click="handleBack">
          <v-icon icon="mdi-arrow-u-left-top"></v-icon>
        </button>
        <button class="sudoku-toolbar__tools-btn " @click="handleNext">
          <v-icon icon="mdi-arrow-u-right-top"></v-icon>
        </button>
      </div> 
 -->      <div class="sudoku-toolbar__directional-controller">
        <slot name='directionalController' />
      </div>
      <div class="sudoku-toolbar__numeral-controller">
        <slot name='numeralController' />
    </div>
</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">

.sudoku-toolbar {
  width: 100%;
  font-weight: 400;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  column-gap: 1rem;

  &__directional-controller{
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &__numeral-controller{
    grid-column-start: 3;
    grid-column-end: 5;
  }

  &__tools {
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    gap: 1rem;

    &-history{
      background-color: var(--i-secundary-color);
      overflow: hidden;
      display: flex;
      flex-direction: row;
      border-radius: 1.5rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &-extra {
      display: flex;
      flex-direction: row;
      border-radius: 1.5rem;
      background-color: var(--i-secundary-color);
    }

    &-btn{
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
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

  .sudoku-toolbar{
    max-width: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;

    &__directional-controller{
      display: none;
    }


    &__tools{
      flex-direction: row;

      &-btn{
        width: 50px;
        height: 50px;
      }
    }
  }
}


</style>
