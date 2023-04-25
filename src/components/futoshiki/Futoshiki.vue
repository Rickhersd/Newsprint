<template>
  <div class="Futoshiki_container">
    <h1>Futoshiki</h1>
    <!-- <GameTimer :currentTime="currentTime" /> -->
    <FutoshikiBoard
      :completeBoard="completedBoard"
      :gameBoard="gameHistory.lastRegister"
      :initialBoard="initialBoard"
      :activeValue="activeValue"
      :editBoard="editBoard"
    />
    <FutoshikiToolbar
      :activeValue="activeValue"
      :initialBoard="initialBoard"
      :toggleActive="toggleActive"
    />
  </div>
</template>

<script setup lang="ts">
import {
  FutoshikiBoardType,
  FutoshikiCellType,
} from "../../types/FutoshikiTypes";
import countNInBoard from "../../utils/countNInBoard";
import validateGameBoard from "../../utils/validateGameBoard";
import validateFutoshiki from "../../utils/futoshikiUtils";
import FutoshikiToolbar from "./FutoshikiToolbar.vue";
// import GameTimer from "../GameTimer.vue";
import FutoshikiBoard from "./FutoshikiBoard.vue";
import { ref, onMounted, onUpdated } from "vue";
import useHistory from "../../ts/useHistory";
import invertBiArray from "../../utils/nonograms.ts/invertBiArray";

const completedBoard: FutoshikiBoardType = [
  [
    { value: 3, comparison: null, state: 'empty' },
    { value: 4, comparison: null, state: 'empty' },
    { value: 1, comparison: null, state: 'empty' },
    { value: 2, comparison: null, state: 'empty'  },
  ],
  [
    { value: 4, comparison: ["top"], state: 'empty'  },
    { value: 3, comparison: null, state: 'empty'  },
    { value: 2, comparison: null, state: 'empty'  },
    { value: 1, comparison: null, state: 'empty'  },
  ],
  [
    { value: 2, comparison: null, state: 'empty'  },
    { value: 1, comparison: null, state: 'empty'  },
    { value: 4, comparison: null, state: 'empty'  },
    { value: 3, comparison: null, state: 'empty'  },
  ],
  [
    { value: 1, comparison: null, state: 'empty'  },
    { value: 2, comparison: ["top"], state: 'empty'  },
    { value: 3, comparison: ["left"], state: 'empty'  },
    { value: 4, comparison: ["left"], state: 'empty'  },
  ],
];

const initialBoard: FutoshikiBoardType = [
  [
    { value: 3, comparison: null, state: 'empty'  },
    { value: 4, comparison: null, state: 'empty'  },
    { value: 1, comparison: null, state: 'empty'  },
    { value: 2, comparison: null, state: 'empty'  },
  ],
  [
    { value: 4, comparison: ["top"], state: 'empty'  },
    { value: 3, comparison: null, state: 'empty'  },
    { value: 2, comparison: null, state: 'empty'  },
    { value: 1, comparison: null, state: 'empty'  },
  ],
  [
    { value: 2, comparison: null, state: 'empty'  },
    { value: 1, comparison: null, state: 'empty'  },
    { value: 4, comparison: null, state: 'empty'  },
    { value: 3, comparison: null, state: 'empty'  },
  ],
  [
    { value: 1, comparison: null, state: 'empty'  },
    { value: 2, comparison: ["top"], state: 'empty'  },
    { value: 3, comparison: ["left"], state: 'empty'  },
    { value: 4, comparison: ["left"], state: 'empty'  },
  ],
];

const gameHistory = useHistory<FutoshikiBoardType>([initialBoard]);

onUpdated(() => {
  validateFutoshiki(gameHistory.lastRegister);
});

const activeValue = ref<number>(0);
const currentTime = ref<number>(0);

let timerId: NodeJS.Timer | null = null;
let completeTime = ref<number>(0);

function editBoard(position: number[], newValue: number): void {
  const newRegister = gameHistory.gameHistory[
    gameHistory.gameHistory.length - 1
  ].map((row) => [...row]);
  newRegister[position[0]][position[1]].value = newValue;
  gameHistory.register(newRegister);
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

function resetBoard(): void {
  initialBoard.forEach((row, i) => {
    row.forEach((value, j) => {
      editBoard([i, j], value.value);
    });
  });
}

function buildGameBoard(gameBoard: FutoshikiBoardType) {
  gameBoard.forEach((row, i) => {
    row.forEach((value, j) => {
      editBoard([i, j], value.value);
    });
  });
}

function getBoard() {
  //
}

// onMounted(() => {
//   timerId = setInterval(startTimer, 1000);
// });

// onBeforeUnmount(() => {
//   clearInterval(timerId)
// })
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
