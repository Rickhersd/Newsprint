<template >
  <div class='directional-controller'>
    <span class="directional-controller__corner"/>
    <button class="directional-controller__btn directional-controller__up"
      @click="emits('onMove', -1, 0)"
    >
      <v-icon icon='mdi-arrow-up-bold' />
    </button>
    <span class="directional-controller__corner"/>
    <button class="directional-controller__btn directional-controller__left"
      @click="emits('onMove', 0, -1)"
    >
      <v-icon icon='mdi-arrow-left-bold' />
    </button>
    <span class="directional-controller__center"/>
    <button class="directional-controller__btn directional-controller__right"
      @click="emits('onMove', 0, 1)"
    >
      <v-icon icon='mdi-arrow-right-bold' />
    </button>
    <span class="directional-controller__corner"/>
    <button class="directional-controller__btn directional-controller__down"
      @click="emits('onMove', 1, 0)"
    >
      <v-icon icon='mdi-arrow-down-bold' />
    </button>
    <span class="directional-controller__corner"/>
  </div>
</template>

<script setup lang="ts">

import { PositionType } from "../types/types"

const emits = defineEmits<{
  (e:'onMove', y: (-1 | 0 | 1), x: (-1 | 0 | 1)):void
}>();


</script>

<style scoped lang='scss'>
  
  .directional-controller{

    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    aspect-ratio: 1/1;
    

    &__btn{
      background-color: yellow;
      background-color: var(--vue-mint);
    }

    &__center{
      background-color: var(--vue-mint);
      scale: 1.2;
      position: relative;
      z-index: -1;
    }

    &__corner{
      background-color: var(--main-bg);
      border-radius: 0.5rem;
    }

    &__up{
      border-radius: 0.5rem 0.5rem 0rem 0rem;
    }

    &__right{
      border-radius: 0rem 0.5rem 0.5rem 0rem ;
    }

    &__down{
      border-radius: 0rem 0rem 0.5rem 0.5rem;
    }

    &__left{
      border-radius: 0.5rem 0rem 0rem 0.5rem;
    }


  }


</style>