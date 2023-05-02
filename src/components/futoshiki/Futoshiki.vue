<template>
  <div class="Futoshiki_container" key="moves">
    <h1>Futoshiki</h1>
    <!-- <GameTimer :currentTime="currentTime" /> -->
    <FutoshikiBoard 
      :initialBoard="gameHistory.getFirstRegister()">
      <FutoshikiRow 
        v-for="(row, rowIndex) in gameHistory.getLastRegister()"
        :initialBoard="gameHistory.getFirstRegister()"
        :key="rowIndex" 
      > 
        <FutoshikiCell 
          v-for="(cell, cellIndex) in row"
          :cell="cell"
          :editBoard="editBoard"
          :activeValue="activeValue"
          :rowIndex="rowIndex"
          :cellIndex="cellIndex"
        />
      </FutoshikiRow>
    </FutoshikiBoard>
    <FutoshikiToolbar
      :activeValue="activeValue"
      :initialBoard="initialBoard"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<script setup lang="ts">
import { FutoshikiBoardType, FutoshikiCellType } from "../../types/FutoshikiTypes";
import { ref, onMounted, onUpdated } from "vue";
import validateFutoshiki from "../../utils/futoshikiUtils";
import FutoshikiToolbar from "./FutoshikiToolbar.vue";
// import GameTimer from "../GameTimer.vue";
import buildFutoshikiBoard from "../../utils/futoshikiUtils/buildFutoshikiBoard"
import FutoshikiBoard from "./FutoshikiBoard.vue";
import FutoshikiRow from "./FutoshikiRow.vue";
import FutoshikiCell from "./FutoshikiCell.vue"
import useHistory from "../../ts/useHistory";

const initialBoard: (("top" | "left" | "right" | "bottom")[]| null)[][] = [
  [null, null, null, null],
  [['top'], null, ['top', 'bottom', 'left', 'right'], null],
  [null, null, null, null],
  [null, ['top'], ['left'], ['left']]
];

const gameHistory = useHistory<FutoshikiBoardType>([buildFutoshikiBoard(initialBoard)]);

onUpdated(() => {
  validateFutoshiki(gameHistory.getLastRegister());
});

const activeValue = ref<number>(0);
const currentTime = ref<number>(0);
const moves = ref<number>(0);

let timerId: NodeJS.Timer | null = null;
let completeTime = ref<number>(0);

function editBoard(position: number[], newValue: FutoshikiCellType): void {
  const newRegister = gameHistory.getLastRegister().map(row => [...row]);
  newRegister[position[0]][position[1]] = newValue;
  gameHistory.register(newRegister);
  moves.value++;
}

// function startTimer(): void {
//   if (validateGameBoard(gameHistory.getLastRegister())) {
//     stopTimer();
//   } else {
//     currentTime.value++;
//   }
// }

// function stopTimer() {
//   completeTime.value = currentTime.value;
// }

function toggleActive(input: number) {
  return (activeValue.value = input);
}

function handleReset(): void {
  initialBoard.forEach((row, i) => {
    row.forEach((value, j) => {
      editBoard([i, j], value.value);
    });
  });
}

function handleNext(): void {
  //
}

function handleBack(): void {
  //
}

function getBoard() {
  //
}

</script>

<style scoped>
.Futoshiki_container {
  width: 100%;
  padding: 2.5rem;
  gap: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.difficulty {
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.difficulty button {
  height: 32px;
  border: 0.5px solid #ffffff80;
  border-radius: 4px;
  background: transparent;
  color: var(--color-font-teal);
}
.difficulty button:hover {
  color: var(--color-selected);
  cursor: pointer;
}
.difficulty button:active {
  border: 0.5px solid var(--color-selected);
}

@media only screen and (max-width: 600px) {
  .container {
    justify-content: flex-start;
    gap: 24px;
  }
  .difficulty {
    margin-top: 20px;
    font-size: 10px;
  }
  .difficulty button {
    height: 24px;
  }
}
</style>
