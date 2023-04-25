<template>
  <div class="futoshiki-cell__cont">
    <button class="futoshiki-cell__input" @click="() => editCell()">
      <h1 v-if="cellData.value !== 0" class="futoshiki-cell">
        {{ cellData.value }}
      </h1>
      <span v-if="cellData.comparison" class="futoshiki-cell__arrow-cont">
        <v-icon
          v-if="cellData.comparison.includes('left')"
          class="futoshiki-cell__arrow futoshiki-cell__arrow-left"
          icon="mdi-chevron-left"
        ></v-icon>
        <v-icon
          v-if="cellData.comparison.includes('right')"
          class="futoshiki-cell__arrow futoshiki-cell__arrow-right"
          icon="mdi-chevron-right"
        ></v-icon>
        <v-icon
          v-if="cellData.comparison.includes('top')"
          class="futoshiki-cell__arrow futoshiki-cell__arrow-top"
          icon="mdi-chevron-up"
        ></v-icon>
        <v-icon
          v-if="cellData.comparison.includes('bottom')"
          class="futoshiki-cell__arrow futoshiki-cell__arrow-bottom"
          icon="mdi-chevron-down"
        ></v-icon>
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {
  FutoshikiCellType,
  FutoshikiBoardType,
} from "../../types/FutoshikiTypes";

const props = defineProps<{
  cellData: FutoshikiCellType;
  editBoard: (position: number[], newValue: number) => void;
  initialBoard: FutoshikiBoardType;
  activeValue: number;
  cellIndex: number;
  rowIndex: number;
}>();

const editCell = () => {
  if (props.activeValue) {
    props.editBoard([props.rowIndex, props.cellIndex], props.activeValue);
  } else if (props.activeValue === 0) {
    props.editBoard([props.rowIndex, props.cellIndex], 0);
  } else {
    console.error(new Error("No number has been selected"));
  }
};
</script>

<style lang="scss" scoped>
.futoshiki-cell {
  &__cont {
    height: 100%;
    width: 100%;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    translate: 100% -50%;
    top: 50%;
    right: 0%;

    &-cont {
      width: 100%;
      height: 100%;
      display: contents;
      position: relative;
    }

    &::before {
      font-size: 50px;
      color: var(--dark-border);
    }

    &-left {
      translate: -100% -50%;
      top: 50%;
      left: 0%;
    }

    &-bottom {
      translate: -50% 100%;
      bottom: 0%;
      left: 50%;
    }

    &-top {
      translate: -50% -100%;
      top: 0%;
      left: 50%;
    }

    &-right {
      translate: 100% -50%;
      top: 50%;
      right: 0%;
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
