<template >
  <div class="home">
    <header class="home__header">
      <div class="home__header-logo">
        <PuzzleCodes />
      </div >
      <p>Bienvendio, a PuzzleCodes! Este proyecto Open Source es un colección de pasatiempos o rompecabezas de lógica desarrollados con el framework de interfaces gráficas VueJS, con la objetivo de documentar y explicar a detalle toda la logica que hay detras de los algoritmos para validar los puzlles</p>
      <p>Todos los puzzles disponibles son completamente jugables, y si no te dedicas a la programacion, igual podras entretenerte jugando y conocer a cerca de puzzles poco conocidos. El objetivo de este proyecto es meramente educativo, ya que dependiendo del tipo de puzzle, la complejidad de sus algoritmos puede ser poca o muy alta, por lo que estudiarlos y entenderlos es una buena forma de mejorar la logica de programación</p>
      <p>Así pues, divierte jugando, aprendiendo y compilando...</p>
      <div class="home__header-puzzles-number">
        1 / 30 puzzles desarrollados
      </div>
    </header>
    <Grid>
      <PuzzleFlashcard 
        :title='"Sudoku"'
        :to='"/sudokus"'
        >
          <ThumbnailSudoku
            :gameboard='sudokuBoard'
        ></ThumbnailSudoku>
      </PuzzleFlashcard>
      <PuzzleFlashcard 
          :title='"Nonogramas"'
          
          :comingSoon='true'
        >
          <ThumbnailNonogram
            :gameboard='nonogramBoard'
          ></ThumbnailNonogram>
      </PuzzleFlashcard>
      <PuzzleFlashcard 
          :title='"Hitori"'
          :comingSoon='true'
        >
          <ThumbnailHitori
            :gameboard='hitoriBoard'
        ></ThumbnailHitori>
      </PuzzleFlashcard>
      <PuzzleFlashcard 
          :title='"Futoshiki"'
          
          :comingSoon='true'
                 >
          <ThumbnailFutoshiki
            :gameboard='futoshikiBoard'
        ></ThumbnailFutoshiki>
      </PuzzleFlashcard>
  </Grid>
  </div>
</template>

<script lang='ts' setup>
  import PuzzleCodes from "../components/PuzzleCodes.vue"
  import PuzzleFlashcard from '../components/PuzzleFlashcard.vue'
  import Grid from '../components/Grid.vue'
  import ThumbnailSudoku from '../components/thumbnails/ThumbnailSudoku.vue'
  import ThumbnailNonogram from '../components/thumbnails/ThumbnailNonogram.vue'
  import ThumbnailFutoshiki from '../components/thumbnails/ThumbnailFutoshiki.vue'
  import ThumbnailHitori from '../components/thumbnails/ThumbnailHitori.vue'

  const sudokuBoard = [
    [8,0,0,0,6,0,0,0,4],
    [0,1,0,7,0,4,0,6,0],
    [0,0,6,5,1,2,7,0,0],
    [0,2,7,0,0,0,8,4,0],
    [4,0,5,0,7,0,1,0,6],
    [0,6,8,0,0,0,9,3,0],
    [0,0,4,1,5,7,3,0,0],
    [0,5,0,3,0,6,0,7,0],
    [7,0,0,0,2,0,0,0,1],
  ]

  const nonogramBoard = [
    [0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [1,1,1,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0,1,0,0,0,0,0,0,0],
    [0,0,0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,1,1,0,1,1,1,1,1,1,0,0,1,1],
    [0,0,1,1,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,0,0,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
  ]

  const hitoriBoard = [
    [2,4,4,2,5],
    [1,2,4,5,2],
    [1,1,2,3,2],
    [5,3,2,4,4],
    [2,4,3,4,5],
  ]

  const futoshikiBoard: (("top" | "left" | "right" | "bottom")[]| null | number)[][] = [
    [null, 2, null, null],
    [['top'], null, 3, null],
    [null, 1, null, null],
    [null, ['top'], ['left'], ['left']]
  ];

</script>


<style lang="scss" scoped>
    
.home{
  margin: auto;
  margin-top: 8rem;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;

  &__header{

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    max-width: 800px;

    &-logo{
      max-width: 300px;
      width: 100%;
      margin-bottom: 1.5rem;
    }

    &-puzzles-number{
      background-color: var(--vue-blue);
      color: white;
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      font-weight: 500;
      border-radius: 2rem;
    }
  } 
}

@media only screen and (min-width: 600px) {
  .futoshiki-cell {
    span {
      font-size: 24px;
    }
  }

  .home{
  margin: auto;
  margin-top: 10rem;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;

  &__header{

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    max-width: 800px;


    &-logo{
      max-width: 600px;
      width: 100%;
      margin-bottom: 2rem;

    }
  } 
}

}

</style>