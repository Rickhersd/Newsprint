<template>
  <div class="sudoku_container">
    <GameTimer 
      :currentTime='currentTime' 
    />
    <SudokuBoard 
      :completeBoard="completedBoard"
      :gameBoard="gameHistory.gameHistory[ gameHistory.gameHistory.length - 1]"
      :initialBoard="initialBoard"
      :activeValue="activeValue"
      :editBoard="editBoard"
      :toggleActive="toggleActive"
    />
    <SudokuControls
      :activeValue="activeValue"
      :toggleActive="toggleActive"
      :handleBack="gameHistory.back"
      :handleNext="gameHistory.next"
    />
  </div>
</template>

<script setup lang="ts">

  import { SudokuBoardType, SudokuCellType } from "../../types/SudokuTypes";
  import countNInBoard from "../../utils/countNInBoard";
  import validateGameBoard from "../../utils/validateGameBoard";
  import GameTimer from "../GameTimer.vue"
  import SudokuBoard from "./SudokuBoard.vue";
  import SudokuControls from "./SudokuToolbar.vue";
  import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'
  import useHistory from "../../ts/useHistory";

  const completedBoard:SudokuBoardType = [
    [8, 0, 0, 0, 6, 0, 0, 0, 4],
    [0, 1, 0, 7, 0, 4, 0, 6, 0],
    [0, 0, 6, 5, 1, 2, 7, 0, 0],
    [0, 2, 7, 0, 0, 0, 8, 4, 0],
    [4, 0, 5, 0, 7, 0, 1, 0, 6],
    [0, 6, 8, 0, 0, 0, 9, 3, 0],
    [0, 0, 4, 1, 5, 7, 3, 0, 0],
    [0, 5, 0, 3, 0, 6, 0, 7, 0],
    [7, 0, 0, 0, 2, 0, 0, 0, 1],
  ]

  const initialBoard:SudokuBoardType = [
    [8, 0, 0, 0, 6, 0, 0, 0, 4],
    [0, 1, 0, 7, 0, 4, 0, 6, 0],
    [0, 0, 6, 5, 1, 2, 7, 0, 0],
    [0, 2, 7, 0, 0, 0, 8, 4, 0],
    [4, 0, 5, 0, 7, 0, 1, 0, 6],
    [0, 6, 8, 0, 0, 0, 9, 3, 0],
    [0, 0, 4, 1, 5, 7, 3, 0, 0],
    [0, 5, 0, 3, 0, 6, 0, 7, 0],
    [7, 0, 0, 0, 2, 0, 0, 0, 1],
  ]

  const gameHistory = useHistory<SudokuBoardType>([[
    [8, 0, 0, 0, 6, 0, 0, 0, 4],
    [0, 1, 0, 7, 0, 4, 0, 6, 0],
    [0, 0, 6, 5, 1, 2, 7, 0, 0],
    [0, 2, 7, 0, 0, 0, 8, 4, 0],
    [4, 0, 5, 0, 7, 0, 1, 0, 6],
    [0, 6, 8, 0, 0, 0, 9, 3, 0],
    [0, 0, 4, 1, 5, 7, 3, 0, 0],
    [0, 5, 0, 3, 0, 6, 0, 7, 0],
    [7, 0, 0, 0, 2, 0, 0, 0, 1],
  ]])

  const activeValue = ref<SudokuCellType>(0);
  const currentTime = ref<number>(0);

  let timerId:  NodeJS.Timer | null = null;
  let completeTime = ref<number>(0)

  function editBoard(position: number[], newValue:SudokuCellType):void {
    const newRegister = gameHistory.gameHistory[ gameHistory.gameHistory.length - 1].map(row => [...row]);
    newRegister[position[0]][position[1]] = newValue;
    gameHistory.register(newRegister)
    console.log(gameHistory.readAll())
  }

  function startTimer():void {
    if (validateGameBoard(gameHistory.getLastRegister())) {
      stopTimer();
    } else {
      currentTime.value++;
    }
  }

  function stopTimer() {
    completeTime.value = currentTime.value;
  }

  function toggleActive(input: SudokuCellType) {
    return countNInBoard(input, gameHistory.getLastRegister()) >= 9
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

  function buildGameBoard(gameBoard: SudokuBoardType) {
    gameBoard.forEach((row, i) => {
      row.forEach((value, j) => {
        editBoard([i, j], value);
      });
    });
  }

  function getBoard() {
    //     
  }

  onMounted(() => {
    timerId = setInterval(startTimer, 1000);
  }) 

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