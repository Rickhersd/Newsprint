<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      :width='450'
      :border='false'
    >
     <DrawerContentWrapper @close="drawer = !drawer">     
        <SudokuAlgorithm v-show="drawerContent === 'algorithm'"/>
        <SudokuTutorial v-show="drawerContent === 'tutorial'"/>
      </DrawerContentWrapper>
    </v-navigation-drawer>
  <v-main class="sudoku_container">  
    <GameTimer 
      :initialTime="currentTime"
      :isCompleted="isCompleted"
      @onTimerEnd="handleTimerEnd" />
    <SudokuBoard :key='gameHistory.moves'> 
      <template #toolbar>
        <ToolbarAsideBtn :tooltipText="'Algoritmos'" @click.stop="() => {
          drawer = !drawer
          drawerContent = 'algorithm'
        }">
          <v-icon size='large' icon="mdi-code-tags"></v-icon>
        </ToolbarAsideBtn>
        <ToolbarAsideBtn :tooltipText="'Tutorial'" @click.stop="() => {
          drawer = !drawer
          drawerContent = 'tutorial'
        }">
          <v-icon size='large' icon="mdi-school"></v-icon>
        </ToolbarAsideBtn>
        <ToolbarAsideBtn :tooltipText="'Reinicar'" >
          <v-icon size='large' icon="mdi-restart"></v-icon>
        </ToolbarAsideBtn>
        <ToolbarAsideBtn :tooltipText="'Exportar en pdf'">
          <v-icon size='large' icon="mdi-file-export"></v-icon>
        </ToolbarAsideBtn>
        <ToolbarAsideBtn :tooltipText="'Mostrar Errores'" @click.stop="showErrors = !showErrors">
          <v-icon size='large' 
            :icon="showErrors? 'mdi-eye-remove' : 'mdi-eye-off'">   
          </v-icon>
        </ToolbarAsideBtn>
      </template>
      <SudokuRow v-for="(row, rowIndex) in gameHistory.gameHistory[gameHistory.gameHistory.length - 1]" :key="rowIndex">
        <SudokuCell 
          v-for="(cell, cellIndex) in row" 
          :key="cellIndex" 
          :cellData="cell"
          :selectedCell="(rowIndex == selectedCell.rowIndex && cellIndex == selectedCell.cellIndex)"
          :rowIndex="rowIndex"
          :cellIndex="cellIndex"
          :showErrors="showErrors"
          :activeValue="activeValue"
          @onSelect="changeSelectedCell"
          @onEdit="editBoard"
        />
      </SudokuRow>
    </SudokuBoard>
    <SudokuControls
      :activeValue="activeValue"
      :toggleActive="toggleActive"
      :handleRestart="() => gameHistory.reset()"
      :handleBack="() => gameHistory.back()"
      :handleNext="() => gameHistory.next()"
    >
    <template #directionalController>
      <DirectionalController
        @onMove="moveSelectedCell"
      />
  </template>
    </SudokuControls>
  </v-main>
</div>
</template>

<script setup lang="ts">

import { SudokuBoardType, SudokuCellType, SudokuValidCellValues } from "../../types/SudokuTypes";
import { PositionType } from "../../types/types"
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'
import countNInBoard from "../../utils/countNInBoard";
import GameTimer from "../GameTimer.vue";
import SudokuBoard from "./SudokuBoard.vue";
import SudokuRow from "./SudokuRow.vue";
import SudokuCell from "./SudokuCell.vue";
import SudokuControls from "./SudokuToolbar.vue";
import DrawerContentWrapper from "../DrawerContentWrapper.vue"
import ToolbarAsideBtn from "../ToolbarAsideBtn.vue"
import { onUpdated, ref, onBeforeMount, watch } from "vue";
import useHistory from "../../ts/useHistory";
import buildGameBoard from "../../utils/sudokuUtils/buildSudokuBoard";
import checkSudoku from "../../utils/sudokuUtils";
import SudokuAlgorithm from '../algorithms/SudokuAlgorithm.vue';
import SudokuTutorial from '../tutorials/SudokuTutorial.vue';
import { sudokuData } from "../../data/SudokuData";
import DirectionalController from "../DirectionalController.vue"

const route = useRoute()
const initialBoard: SudokuValidCellValues[][] = sudokuData[route.params.id].initialBoard
const gameHistory = useHistory<SudokuBoardType>([buildGameBoard(initialBoard)]);
const selectedCell = ref<PositionType >({rowIndex: 0, cellIndex: 0});
const activeValue = ref<SudokuValidCellValues>(0);
const isCompleted = ref<boolean>(false);
const currentTime = ref<number>(0);
const moves = ref<number>(0);
const drawer = ref(null);
const showErrors = ref<boolean>(false);
const drawerContent = ref<'algorithm'|'tutorial' | null>(null)


const editBoard = (position: PositionType, newValue: number): void => {
  const newRegister = gameHistory.getLastRegister().map(row => [...row]);
  newRegister[position.rowIndex][position.cellIndex].value = newValue;
  gameHistory.register(newRegister);
  validateGame();
}

const changeSelectedCell = (rowIndex, cellIndex) => {
  selectedCell.value = {rowIndex, cellIndex}
  console.log(selectedCell.value)
}

const handleTimerEnd = (time: number):void => {
  currentTime.value = time;
}

onBeforeRouteUpdate(async (to, from) => {
  // only fetch the user if the id changed as maybe only the query or the hash changed
  console.log(to.params.id)

  if (to.params.id !== from.params.id) {
    console.log(to.params.id)
  }
})

const moveSelectedCell = (y: -1 | 0 | 1, x: -1 | 0 | 1) => {

  const clamp = (x:number, min:number, max:number) => Math.max( min, Math.min(x, max));

  selectedCell.value = {
    rowIndex: clamp(selectedCell.value.rowIndex + y, 0, 8),
    cellIndex: clamp(selectedCell.value.cellIndex + x, 0, 8)
  }

  console.log(selectedCell.value)
}

function getBoard(){
 
}

watch(
  () => route.params.id,
  async newId => {
    
})


onBeforeMount(() =>{
  getBoard()

})

// const change 

const toggleActive = (activeTarget: SudokuValidCellValues):void => {
  countNInBoard(activeTarget, gameHistory.getLastRegister()) >= 9
    ? (activeValue.value = 0)
    : (activeValue.value = activeTarget);
}

const startGame = () => {

}

const stopGame =() => {
  console.log('ganaste')
}

onUpdated(() => {
  
  })

function validateGame(){
  console.log('hola')
  const isValid:boolean = checkSudoku(gameHistory.gameHistory[gameHistory.gameHistory.length - 1]);
  if(isValid){
    stopGame();
  }
}

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