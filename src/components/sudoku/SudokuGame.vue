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
      @onTimer="handleTime" />
    <SudokuBoard> 
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
        <ToolbarAsideBtn :tooltipText="'Reinicar'" @click.stop="() => {
          currentTime = 0;
          gameHistory.reset();
        }" >
          <v-icon size='large' icon="mdi-restart"></v-icon>
        </ToolbarAsideBtn>
        <!-- <ToolbarAsideBtn :tooltipText="'Exportar'">
          <v-icon size='large' icon="mdi-file-export"></v-icon>
        </ToolbarAsideBtn> -->
        <ToolbarAsideBtn :tooltipText="'Errores'" @click.stop="showErrors = !showErrors">
          <v-icon size='large' 
            :icon="showErrors? 'mdi-eye-remove' : 'mdi-eye-off'">   
          </v-icon>
        </ToolbarAsideBtn>
      </template>
      <SudokuRow v-for="(row, rowIndex) in gameHistory.getLastRegister()" :key="rowIndex">
        <SudokuCell 
          v-for="(cell, cellIndex) in row" 
          :key="cellIndex" 
          :cellData="cell"
          :selectedCell="{y: selectedCell.rowIndex, x: selectedCell.cellIndex}"
          :auxiliarCell="(rowIndex == selectedCell.rowIndex || cellIndex == selectedCell.cellIndex)"
          :rowIndex="rowIndex"
          :cellIndex="cellIndex"
          :showErrors="showErrors"
          :activeValue="activeValue"
          @onSelect="changeSelectedCell"
        />
      </SudokuRow>
    </SudokuBoard>
    <SudokuControls>
      <template #directionalController>
        <DirectionalController
          @onMove="moveSelectedCell"
        />
      </template>
      <template #numeralController>
        <SudokuNumberSelector 
          :activeValue="activeValue" 
          :toggleActive="toggleActive" 
          @onEdit="(newValue) => editBoard({rowIndex: selectedCell.rowIndex, cellIndex: selectedCell.cellIndex}, newValue)"
        />
      </template>
    </SudokuControls>
  </v-main>
</div>
</template>

<script setup lang="ts">

import { SudokuBoardType, SudokuCellType, SudokuValidCellValues } from "../../types/SudokuTypes";
import { PositionType } from "../../types/types"
import { useRoute } from 'vue-router'
import countNInBoard from "../../utils/countNInBoard";
import GameTimer from "../GameTimer.vue";
import SudokuBoard from "./SudokuBoard.vue";
import SudokuRow from "./SudokuRow.vue";
import SudokuCell from "./SudokuCell.vue";
import SudokuControls from "./SudokuToolbar.vue";
import DrawerContentWrapper from "../DrawerContentWrapper.vue"
import ToolbarAsideBtn from "../ToolbarAsideBtn.vue"
import SudokuNumberSelector from "./SudokuNumberSelector.vue";
import { ref, onMounted, onUnmounted, watch } from "vue";
import useHistory from "../../ts/useHistory";
import buildGameBoard from "../../utils/sudokuUtils/buildSudokuBoard";
import checkSudoku from "../../utils/sudokuUtils";
import SudokuAlgorithm from '../algorithms/SudokuAlgorithm.vue';
import SudokuTutorial from '../tutorials/SudokuTutorial.vue';
import { sudokuData } from "../../data/SudokuData";
import DirectionalController from "../DirectionalController.vue"

const route = useRoute()
const sudokuId = parseInt(route.params.id as string) - 1;
const initialBoard: SudokuValidCellValues[][] = sudokuData[sudokuId].initialBoard as SudokuValidCellValues[][];
const isCompleted = ref<boolean>(false);
const currentTime = ref<number>(0);
const gameHistory = useHistory<SudokuBoardType>([setGame()], buildGameBoard(initialBoard));
const selectedCell = ref<PositionType >({rowIndex: 0, cellIndex: 0});
const activeValue = ref<SudokuValidCellValues>(0);
const moves = ref<number>(0);
const drawer = ref<boolean>(false);
const showErrors = ref<boolean>(false);
const drawerContent = ref<'algorithm'|'tutorial' | null>(null)

const editBoard = (position: PositionType, newValue:SudokuValidCellValues): void => {
  if(gameHistory.getLastRegister()[position.rowIndex][position.cellIndex].readOnly == true) return;
  const newRegister = gameHistory.getLastRegister().map(row => [...row]);
  newRegister[position.rowIndex][position.cellIndex] = {
    value: newValue,
    state: 'correct',
    readOnly: false
  };
  gameHistory.register(newRegister);
  validateGame();
  }

const changeSelectedCell = (rowIndex: number, cellIndex: number): void => {
  selectedCell.value = {rowIndex, cellIndex}
}

const moveSelectedCell = (y: -1 | 0 | 1, x: -1 | 0 | 1) => {
  const clamp = (x:number, min:number, max:number) => Math.max( min, Math.min(x, max));
  selectedCell.value = {
    rowIndex: clamp(selectedCell.value.rowIndex + y, 0, 8),
    cellIndex: clamp(selectedCell.value.cellIndex + x, 0, 8)
  }
}

watch(
  () => route.params.id,
  async newId => {
    
})

const handleTime = (time: number) => {
  console.log(currentTime.value)
  currentTime.value = time
}

const handleKeyDown = (e: KeyboardEvent) => {
  const keyCode = e.code;
  const numericCode = e.code.match(/\d+/)?.[0];

  if (numericCode){
    if (numericCode >= '1' && numericCode <= '9') {
      editBoard({
          rowIndex: selectedCell.value.rowIndex, 
          cellIndex: selectedCell.value.cellIndex
        }, 
        parseInt(numericCode, 10) as SudokuValidCellValues
      );
    }
  }
  
  if (keyCode === 'ArrowLeft') moveSelectedCell( 0, -1) //left 
  if (keyCode === 'ArrowUp') moveSelectedCell(-1, 0) //up 
  if (keyCode === 'ArrowRight') moveSelectedCell(0, 1) //right 
  if (keyCode === 'ArrowDown') moveSelectedCell( 1, 0) //down

  function isNumericKey(event: KeyboardEvent): boolean {
    const regex = /^[1-9]$/;
    return regex.test(event.code);
  }
}

function setGame(){
  const localStr = localStorage.getItem(`sudoku-${sudokuId}`)
  if (!localStr) return populateStorage();

  const gameData = JSON.parse(localStr)
  currentTime.value = gameData.currentTime;
  isCompleted.value = gameData.isCompleted;
  return gameData.gameBoard;  
}


function populateStorage(){
  const gameBoard = buildGameBoard(initialBoard)
  const data =  {
    gameBoard: gameBoard,
    currentTime: 0,
    isCompleted: false,
  }

  localStorage.setItem(`sudoku-${sudokuId}`, JSON.stringify(data));
  return gameBoard;
}

function saveStorage(){
  const data =  {
    gameBoard: gameHistory.getLastRegister(),
    currentTime: currentTime.value,
    isCompleted: isCompleted.value,
  }  
  localStorage.setItem(`sudoku-${sudokuId}`, JSON.stringify(data));  
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  saveStorage()
}) 

const toggleActive = (activeTarget: SudokuValidCellValues):void => {
  countNInBoard(activeTarget, gameHistory.getLastRegister()) >= 9
    ? (activeValue.value = 0)
    : (activeValue.value = activeTarget);
}

const stopGame =() => {
  console.log('ganaste')
}

function validateGame(){
  const isValid:boolean = checkSudoku(gameHistory.getLastRegister());
  if(isValid) stopGame(); 
}

</script>

<style scoped>
.sudoku_container {
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
  gap: 1rem;
  display: flex;
  justify-content: center;
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

@media only screen and (min-height: 700px) {
  .sudoku_container {
  gap: 2.5rem;
}
}

</style>