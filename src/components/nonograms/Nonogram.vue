<template>
  <div class="nonogram_container" :key="moves">
    <!-- <GameTimer 
      :currentTime='currentTime' 
    /> -->
    <NonogramBoard
      :initialBoard="gameHistory.getFirstRegister()"
      :rowPatterns="rowPatterns"
      :colPatterns="colPatterns"
      :activeValue="activeValue"
    >
      <NonogramRow
        v-for="(row, rowIndex) in gameHistory.getLastRegister()"
        :key="rowIndex"
        :initialBoard="gameHistory.getFirstRegister()"
      >
        <NonogramCell 
          v-for="(cell, cellIndex) in row" 
          :key="cellIndex" 
          :cell="cell"
          :rowIndex="rowIndex"
          :cellIndex="cellIndex"
          :editBoard="editBoard"
          :activeValue="activeValue"
          :toggleActive="toggleActive"
          :initialBoard="gameHistory.getFirstRegister()"
        />
      </NonogramRow>
    </NonogramBoard>
    <!-- <PuzzleControls
      :activeValue="activeValue"
      :toggleActive="toggleActive"
    /> -->
  </div>
</template>

<script setup lang="ts">

import GameTimer from "../GameTimer.vue"
import NonogramBoard from "./NonogramBoard.vue";
import NonogramRow from "./NonogramRow.vue";
import NonogramCell from "./NonogramCell.vue";
import buildNonogramBoard from "../../utils/nonogramUtils/buildNonogramBoard";
import getNonogramPatterns from "../../utils/nonogramUtils/getNonogramPatterns";
import validateNonogram from "../../utils/nonogramUtils/validateNonogram";
import { ref, onMounted, onBeforeUnmount, reactive, onUpdated } from 'vue'
import useHistory from "../../ts/useHistory";
import { NonogramPatterns, NonogramValidCellType, NonogramBoardType, NonogramCellType } from '../../types/nonogramTypes'
import { invertGameBoard } from '../../utils/utils'

const completedBoard:NonogramValidCellType[][] = ([
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
])

const gameHistory = useHistory<NonogramBoardType>([buildNonogramBoard(completedBoard)]);
const activeValue = ref<NonogramValidCellType>(0);
const currentTime = ref<number>(0);
const rowPatterns = reactive<NonogramPatterns>(getNonogramPatterns(buildNonogramBoard(completedBoard, true)));
const colPatterns = reactive<NonogramPatterns>(getNonogramPatterns(invertGameBoard(buildNonogramBoard(completedBoard, true))));
const moves = ref<number>(0);

let timerId:  NodeJS.Timer | null = null;
let completeTime = ref<number>(0)

const editBoard = (position: number[], newValue: NonogramCellType): void => {

  const newRegister = gameHistory.getLastRegister().map(row => [...row]);
  newRegister[position[0]][position[1]] = newValue;
  gameHistory.register(newRegister);
  moves.value++;
}

// function stopTimer() {
//   completeTime.value = currentTime.value;
// }

function toggleActive(input: NonogramValidCellType) {
  // return countNInBoard(input, completeBoard.value) >= 9
  //   ? (activeValue.value = 0)
  //   : (activeValue.value = input);
}

function resetBoard():void {
  // initialBoard.forEach((row, i) => {
  //   row.forEach((value, j) => {
  //     editBoard([i, j], value);
  //   })
  // });
}

function handleReset():void {

}


function getBoard() {
  //     
}

function stopGame(){
  console.log('ganaste')
}


onUpdated(() => {
  const isValid:boolean = validateNonogram(gameHistory.getLastRegister(), rowPatterns, colPatterns);
  if(isValid){
    stopGame();
  }
})

</script>

<style scoped>
.nonogram_container {
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