<template>
  <div class="sudoku_board">
    <slot></slot>
    <div class="sudoku_board__toolbar-aside">
      <slot name='toolbar'></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.sudoku_board {
  width: calc(100% + 1px);
  aspect-ratio: 1/1;
  display: grid;
  box-sizing: content-box;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-template-rows: repeat(9, minmax(0, 1fr));
  border: 3px solid rgb( 2 2 2);
  box-shadow: 0 0 4px var(--font-teal-transparent);
  position: relative;

  &__toolbar-aside{
    position: fixed;
    width: 100%;
    height: auto;
    display: grid;
    z-index: 100;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    background-color: var(--vue-mint);
    left: 0px;
    bottom: 0px;

    i::before {
      color:white;
    }
  }
}

.sudoku_board .congrats {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  animation: fadeIn 1s;
}
.congrats h1 {
  font-size: 64px;
}
.congrats h4 {
  text-align: center;
}

h4:nth-child(3n) {
  color: var(--color-selected);
}

@media only screen and (min-width: 640px) {

  .sudoku_board{
    width: 400px;

    &__toolbar-aside{
      position: absolute;
      width: 3rem;
      height: auto;
      display: flex;
      flex-direction: column;
      top: 0px;
      bottom: auto;
      background-color: transparent;
      gap:0.5rem;
      left: calc(100% + 1.5rem);
    }
  }
}

@media only screen and (min-width: 1024px) {

  .sudoku_board{
    width: 450px;

    
  }
}

@media only screen and (min-width: 1536px) {

  .sudoku_board{
    width: 600px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
