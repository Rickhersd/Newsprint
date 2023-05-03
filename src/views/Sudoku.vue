<template>
  <v-main>
    <div class='sudoku__header'>
      <div class="sudoku__header-title">
        <v-btn :variant='"text"' to="/" icon="mdi-arrow-left" size="x-large" density='compact' class="sudoku__header-title-back"> </v-btn>
        <h1 > 
        Sudokus
        </h1>
      </div>
      <p>Los Sudokus son un juego de lógica y matematicas de origen japonés, cuyo objetivo consiste en rellenar una cuadrícula de 9x9 con numeros del 1 al 9. A su vez, esta cuadrícula tambien se subidivie en nueve cuadriculas mas de 3x3 
      </p>
      <p>Para ganar, en ninguna fila, columna o subcuadrícula de 3x3 deberán haber números repetidos</p>
    </div >
    <div class='sudoku__filter'>
      <v-btn-toggle density='comfortable' v-model="filter" variant='tonal' color="#142230" mandatory >
        <v-btn class='btn' value="easy">Fácil</v-btn>
        <v-btn value="normal">Normal</v-btn>
        <v-btn value="hard">Díficil</v-btn>
        <v-btn value="expert">Experto</v-btn>
      </v-btn-toggle>
    </div>
    <div class="sudoku__grid-cont">
      <Grid>
        <div v-for="data in sudokuList" :key="data.id" style="width: 100%">
          <PuzzleFlashcard 
            :title="`Sudoku ${data.id}`"
            :difficulty='data.difficulty'
            :to="`/sudokus/${data.id}`"
          >
            <ThumbnailSudoku 
              :gameboard="data.initialBoard"
            ></ThumbnailSudoku>
          </PuzzleFlashcard>
        </div>
      </Grid>
    </div>
  </v-main>
</template>

<!-- #28c76f;
  --vue-blue: #142230; 
 -->
<script lang='ts' setup>

  import PuzzleFlashcard from '../components/PuzzleFlashcard.vue'
  import ThumbnailSudoku from '../components/thumbnails/ThumbnailSudoku.vue'
  import { sudokuData } from '../data/SudokuData';
  import Grid from '../components/Grid.vue'
  import { ref, watch } from 'vue'; 

  const filter = ref<'easy' | 'hard' | 'normal' | 'expert'>('easy');
  const sudokuList = ref(sudokuData)

  watch(filter, () => {
    sudokuList.value = !filter.value.length 
      ? sudokuData 
      : (() => {
        let filteredList = sudokuData.filter(sudoku => filter.value.includes(sudoku.difficulty.filter))
        let restList = sudokuData.filter(sudoku => !filter.value.includes(sudoku.difficulty.filter))

        filteredList.push(...restList)
        return filteredList
      })()
  })
</script>

<style lang="scss" scoped>

  .sudoku {

    &__grid-cont{
      padding: 0rem 0.75rem;
    }

    &__header{
      max-width: 600px;
      margin: auto;
      text-align: center;
      margin-top: 4rem;
      padding: 0rem 0.7rem;

      &-title{
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem 0rem;


        &-back{
          position: absolute;
          right: calc(100% + 0.5rem);
        }

        h1{
        font-size: 2.75rem;
        font-weight: 700;
        
        color: var(--vue-blue);
        }
      }
      

      p{
        margin-top: 0.25rem;
        font-size: 16px;
      }
    }

    &__filter{
      display: flex;
      margin-top: 2rem;
      align-items: center;
      justify-content: center;
    }
  }

/* 1. declare transition */
.fade-move,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}


.fade-leave-active {
  position: absolute;
}
  
</style>