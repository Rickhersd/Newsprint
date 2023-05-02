<template>
  <div class="futoshiki-cell">
    <button class="futoshiki-cell__input" @click="() => editCell()">
      <h1 v-if="cell.value !== 0" class="futoshiki-cell">
        {{ cell.value }}
      </h1>
      <span 
        v-if="cell.comparisons" 
        v-for="comparison in cell.comparisons"  
        class="futoshiki-cell__arrow"
        >
        <v-icon 
          v-if="comparison.type === 'left'" 
          class="futoshiki-cell__arrow-left"
          icon="mdi-chevron-left" 
        ></v-icon>
        <v-icon
          v-if="comparison.type === 'right'"
          class="futoshiki-cell__arrow-right"
          icon="mdi-chevron-right"
        ></v-icon>
        <v-icon
          v-if="comparison.type === 'top'"
          class="futoshiki-cell__arrow-top"
          icon="mdi-chevron-up"
        ></v-icon>
        <v-icon
          v-if="comparison.type === 'bottom'"
          class="futoshiki-cell__arrow-bottom"
          icon="mdi-chevron-down"
        ></v-icon>
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { FutoshikiCellType, FutoshikiBoardType } from "../../types/FutoshikiTypes";

const props = defineProps<{
  cell: FutoshikiCellType;
  editBoard: (position: number[], newValue: number) => void;
  activeValue: number;
  cellIndex: number;
  rowIndex: number;
}>();

const editCell = () => {
  if (props.activeValue) {
    props.editBoard([props.rowIndex, props.cellIndex], {
      value: props.activeValue,
      state: props.cell.state,
      comparisons: props.cell.comparisons
    });
  } else if (props.activeValue === 0) {
    props.editBoard([props.rowIndex, props.cellIndex], {
      value: 0,
      state: props.cell.state,
      comparisons: props.cell.comparisons
    });
  } else {
    console.error(new Error("No number has been selected"));
  }
};
</script>

<style lang="scss" scoped>
.futoshiki-cell {
  
  height: 100%;
  width: 100%;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &__input {
    aspect-ratio: 1/1;
    width: 67.5%;
    position: relative;
    border: 1px solid var(--light-border);

    &:hover {
      cursor: pointer;
      z-index: 10;
      background-color: #ededed;
      border-color: #ededed;
      outline: 2px solid darkslategray;
    }
  }

  &__arrow {
    position: absolute;
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
    display: block;
    top: 0%;
    left: 0%;

    &-cont {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
    }

    &::before {
      font-size: 50px;
      color: var(--dark-border);
    }

    &-left {
      translate: -50% -50%;
      top: 50%;
      left: -26.25%;
      position: absolute;
    }

    &-bottom {
      translate: -50% 50%;
      bottom: -26.25%;
      left: 50%;
      position: absolute;
    }

    &-top {
      translate: -50% -50%;
      top: -26.25%;
      left: 50%;
      position: absolute;
    }

    &-right {
      translate: 50% -50%;
      top: 50%;
      right: -26.25%;
      position: absolute;
    }
  }

  &:active {
    outline: 2px solid darkslategray;
  }

  span {
    font-weight: 200;
    font-size: 18px;
    color: var(--font-gray);
  }
}

@media only screen and (min-width: 450px) {
  .futoshiki-cell {
    span {
      font-size: 24px;
    }
  }
}
</style>
