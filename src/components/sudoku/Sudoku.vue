<template>
  <div class="sudoku_container">
    <GameTimer 
      :initialTime="currentTime"
      :isCompleted="isCompleted"
      @onTimerEnd="handleTimerEnd" />
    <SudokuBoard :key='gameHistory.moves'>   
      <SudokuRow v-for="(row, rowIndex) in gameHistory.gameHistory[gameHistory.gameHistory.length - 1]" :key="rowIndex">
        <SudokuCell 
          v-for="(cell, cellIndex) in row" 
          :key="cellIndex" 
          :cellData="cell"
          :rowIndex="rowIndex"
          :cellIndex="cellIndex"
          :editBoard="editBoard"
          :activeValue="activeValue"
        />
      </SudokuRow>
    </SudokuBoard>
    <SudokuControls
      :activeValue="activeValue"
      :toggleActive="toggleActive"
      :handleRestart="() => gameHistory.reset()"
      :handleBack="() => gameHistory.back()"
      :handleNext="() => gameHistory.next()"
    />
  </div>
</template>

<script setup lang="ts">

import { SudokuBoardType, SudokuCellType, SudokuValidCellValues } from "../../types/SudokuTypes";
import countNInBoard from "../../utils/countNInBoard";
import GameTimer from "../GameTimer.vue";
import SudokuBoard from "./SudokuBoard.vue";
import SudokuRow from "./SudokuRow.vue";
import SudokuCell from "./SudokuCell.vue";
import SudokuControls from "./SudokuToolbar.vue";
import { onUpdated, ref } from "vue";
import useHistory from "../../ts/useHistory";
import buildGameBoard from "../../utils/sudokuUtils/buildSudokuBoard";
import checkSudoku from "../../utils/sudokuUtils";

const initialBoard: SudokuValidCellValues[][] = [
  [8, 0, 0, 0, 6, 0, 0, 0, 4],
  [0, 1, 0, 7, 0, 4, 0, 6, 0],
  [0, 0, 6, 5, 1, 2, 7, 0, 0],
  [0, 2, 7, 0, 0, 0, 8, 4, 0],
  [4, 0, 5, 0, 7, 0, 1, 0, 6],
  [0, 6, 8, 0, 0, 0, 9, 3, 0],
  [0, 0, 4, 1, 5, 7, 3, 0, 0],
  [0, 5, 0, 3, 0, 6, 0, 7, 0],
  [7, 0, 0, 0, 2, 0, 0, 0, 1],
];

const gameHistory = useHistory<SudokuBoardType>([buildGameBoard(initialBoard)]);
const activeValue = ref<SudokuValidCellValues>(0);
const isCompleted = ref<boolean>(false);
const currentTime = ref<number>(0);

const editBoard = (position: number[], newValue: SudokuCellType): void => {
  const newRegister = gameHistory.gameHistory[gameHistory.gameHistory.length - 1].map(row => [...row]);
  newRegister[position[0]][position[1]] = newValue;
  gameHistory.register(newRegister);
}

const handleTimerEnd = (time: number):void => {
  currentTime.value = time;
}

const toggleActive = (activeTarget: SudokuValidCellValues):void => {
  countNInBoard(activeTarget, gameHistory.getLastRegister()) >= 9
    ? (activeValue.value = 0)
    : (activeValue.value = activeTarget);
}

function stopGame(){
  console.log('ganaste')
}

onUpdated(() => {
  const isValid:boolean = checkSudoku(gameHistory.gameHistory[gameHistory.gameHistory.length - 1]);
  if(isValid){
    stopGame();
  }
})

</script>

<style scoped>
.sudoku_container {
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