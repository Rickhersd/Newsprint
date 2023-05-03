import { createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Sudoku from '../views/Sudoku.vue'
import SudokuGame from '../components/sudoku/SudokuGame.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home},
    { path: '/sudokus', component: Sudoku },
    { path: '/sudokus/:id', component: SudokuGame },
  ]
})

export default router;