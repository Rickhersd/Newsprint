<script setup lang="ts">
  import Nonogram from './components/nonograms/Nonogram.vue';
  import Sudoku from './components/sudoku/Sudoku.vue'

</script>

<template>
  <nav>
    <div>
      <h1>Newsprint</h1>
    </div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/sudoku">Sudokus</router-link>
      <router-link to="/hitori">hitori</router-link>
      <router-link to="/futoshiki">Fotushiki</router-link>
      <router-link to="/nonogram">Nonogram</router-link>
    </div>
    
    
  </nav>
  <router-view></router-view>
</template>

<style scoped>

</style>
