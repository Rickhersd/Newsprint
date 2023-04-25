<template>
  <div class="Hitori-container" :key="moves">
    <h1>Hitori</h1>
    <!-- <GameTimer :currentTime="currentTime" /> -->
    <HitoriBoard
      :hitoriBoard="gameHistory.getFirstRegister()"
       >
      <HitoriRow
        v-for="(row, rowIndex) in gameHistory.getLastRegister()"
        class="hitori__row"
        :key="rowIndex"
        :hitoriBoard="gameHistory.getFirstRegister()"
      >
      <HitoriCell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :cell="cell"
        :rowIndex="rowIndex"
        :cellIndex="cellIndex"
        :editBoard="editBoard"
        :initialHitoriBoard="gameHistory.getFirstRegister()"
      />
      </HitoriRow>
    </HitoriBoard> 
  </div>
</template>

<script setup lang="ts">
import { HitoriBoardType, HitoriCellType, HitoriValidCellValues } from "../../types/HitoriTypes";
import validateHitori from "../../utils/hitoriUtils";
import buildHitoriBoard from "../../utils/hitoriUtils/buildHitoriBoard"
// import GameTimer from "../GameTimer.vue";
import HitoriBoard from "./HitoriBoard.vue";
import HitoriRow from "./HitoriRow.vue";
import HitoriCell from "./HitoriCell.vue";
import { ref, onUpdated } from "vue";
import useHistory from "../../ts/useHistory";

const initialBoard: HitoriValidCellValues[][] = [
  [2, 4, 4, 2, 5],
  [1, 2, 4, 5, 2],
  [1, 1, 2, 3, 2],
  [5, 3, 2, 4, 4],
  [2, 4, 3, 4, 5],
];

const gameHistory = useHistory<HitoriBoardType>([buildHitoriBoard(initialBoard)]);

const currentTime = ref<number>(0);

let timerId: NodeJS.Timer | null = null;
let completeTime = ref<number>(0);
let moves = ref<number>(0)

function editBoard(position: number[], newValue: HitoriCellType): void {
  const newRegister = gameHistory.gameHistory[gameHistory.gameHistory.length - 1].map((row) => [...row]);
  newRegister[position[0]][position[1]] = newValue;
  gameHistory.register(newRegister);
  moves.value++
}


function stopGame() {
  console.log('correct')
}

onUpdated(() => {
  const isValid:boolean = validateHitori(gameHistory.gameHistory[gameHistory.gameHistory.length - 1]);
  if(isValid){
    stopGame();
  }
})

function getBoard() {
  //
}

</script>

<style scoped>

.Hitori-container {
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
