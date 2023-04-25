<template>
  <div class="Futoshiki-toolbar">
    <div class="Futoshiki-toolbar__tools">
      <!-- <div class="sudoky-toolbar__tools-history">
        <button class="Futoshiki-toolbar__tools-btn " @click="handleBack">
          <v-icon icon="mdi-arrow-u-left-top"></v-icon>
        </button>
        <button class="Futoshiki-toolbar__tools-btn " @click="handleBack">
          <v-icon icon="mdi-arrow-u-left-top"></v-icon>
        </button>
      </div> -->
      <button class="Futoshiki-toolbar__tools-btn">
        <v-icon icon="mdi-eraser"></v-icon>
      </button>
      <button class="Futoshiki-toolbar__tools-btn">
        <v-icon icon="mdi-lightbulb-on-outline"></v-icon>
      </button>
    </div>
    <FutoshikiNumberSelector
      :activeValue="activeValue"
      :initialBoard="initialBoard"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<script lang="ts" setup>
import { FutoshikiBoardType } from "../../types/FutoshikiTypes";
import FutoshikiNumberSelector from "./FutoshikiNumberSelector.vue";

defineProps<{
  activeValue: number;
  initialBoard: FutoshikiBoardType;
  toggleActive: (number: number) => void;
  // handleBack: () => void,
  // handleNext: () => void,
}>();
</script>

<style scoped lang="scss">
.Futoshiki-toolbar {
  width: 100%;
  max-width: 300px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-direction: column;

  &__tools {
    &-history {
      background-color: var(--i-secundary-color);
    }

    &-btn {
      width: 40px;
      height: 40px;
      background-color: var(--i-secundary-color);
    }
  }
}

.Futoshiki-toolbar .reset {
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
  .Futoshiki_board {
    width: 400px;
  }
}
</style>
