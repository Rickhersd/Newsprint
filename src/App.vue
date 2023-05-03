<template>
  <v-layout>
    <Navbar />  
    <router-view v-slot="{ Component }">
      <transition name='slide' mode="out-in"  @before-enter="handleBeforeEnter">
        <Component :is="Component" />
      </transition>
    </router-view>
    <!-- <Footer /> -->
  </v-layout>
</template>

<script lang='ts' setup>
  import Navbar from './components/layout/Navbar.vue'

  const handleBeforeEnter = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  } 


</script>

<style scoped>

  .v-layout{
    flex-direction: column;
    min-height: 100vh;
  }

.slide-enter-active {
  transition: all 0.2s ease-out;
}

.slide-leave-active {
  transition: all 0.2s cubic-bezier(0, 0.5, 0.8, 1);
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
