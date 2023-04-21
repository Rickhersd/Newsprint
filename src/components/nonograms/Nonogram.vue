<template>
  <div class="sudoku_container">
    <!-- <GameTimer 
      :currentTime='currentTime' 
    /> -->
    <NonogramBoard
      :completeBoard="completeBoard"
      :initialBoard="initialBoard"
      :activeValue="activeValue"
      :editBoard="editBoard"
      :toggleActive="toggleActive"
    />
    <PuzzleControls
      :activeValue="activeValue"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<script setup lang="ts">

  import countNInBoard from "../../utils/countNInBoard";
  import GameTimer from "../GameTimer.vue"
  import NonogramBoard from "./NonogramBoard.vue";
  import NonogramTopNumbers from "./NonogramTopNumbers.vue";
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const completeBoard = ref<(-1 | 0 | 1)[][]>([
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],)

  const initialBoard: (-1 | 0 | 1)[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]

  const activeValue = ref<-1 | 0 | 1>(0);
  const currentTime = ref<number>(0);

  let timerId:  NodeJS.Timer | null = null;
  let completeTime = ref<number>(0)

  function editBoard(position: number[], newValue: -1 | 0 | 1):void {
    completeBoard.value[position[0]][position[1]] = newValue;
  }

  // function startTimer():void {
  //   if (validateGameBoard(completeBoard.value)) {
  //     stopTimer();
  //   } else {
  //     currentTime.value++;
  //   }
  // }

  // function stopTimer() {
  //   completeTime.value = currentTime.value;
  // }

  function toggleActive(input: -1 | 0 | 1) {
    return countNInBoard(input, completeBoard.value) >= 9
      ? (activeValue.value = 0)
      : (activeValue.value = input);
  }

  function resetBoard():void {
    initialBoard.forEach((row, i) => {
      row.forEach((value, j) => {
        editBoard([i, j], value);
      })
    });
  }

  function buildGameBoard(gameBoard: (-1 | 0 | 1)[][]) {
    gameBoard.forEach((row, i) => {
      row.forEach((value, j) => {
        editBoard([i, j], value);
      });
    });
  }

  function getBoard() {
    //     
  }

  // onMounted(() => {
  //   timerId = setInterval(startTimer, 1000);
  // }) 

  // onBeforeUnmount(() => {
  //   clearInterval(timerId)
  // })

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