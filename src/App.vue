<template>
  <v-layout>
    <Navbar />  
      <router-view v-slot="{ Component }">
        <transition name='slide' mode="out-in" >
          <Component :is="Component" />
        </transition>
      </router-view>
    <v-footer class="footer">
      <div>
        Este es un projecto desarrollado con <v-icon icon='mdi-vuejs'></v-icon> @ {{ new Date().getFullYear() }} - <strong>PuzzleCodes</strong>
      </div>
      <div>
        <v-btn href='https://github.com/Rickhersd/Newsprint' variant='text' density="comfortable" icon='mdi-github' >
        </v-btn>
      </div>
  </v-footer>
  </v-layout>
</template>

<script lang='ts' setup>
  import Navbar from './components/layout/Navbar.vue'


</script>

<style scoped>

  .v-layout{
    flex-direction: column;
    min-height: 100vh;
  }

  .footer{
    background: transparent;
    border-top: 1px solid darkgray;
    box-sizing: content-box;
    display: flex;
    font-size: 0.75rem;
    padding: 0.25rem 0px;
    margin: 2rem 1rem 0rem 1rem;
    justify-content: space-between;
    max-height: 40px;

  }


.slide-enter-active {
  transition: all 0.2s ease-out;
}

.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from{
  transform: translateX(20px);
  opacity: 0; 
}


.slide-leave-from{
  
}
.slide-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

</style>
