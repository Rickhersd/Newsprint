<template>
	<v-app-bar
	  color="#28c76f"
	  density="comfortable"
	  >
    <template v-slot:prepend>
     
    </template>
    <v-app-bar-title style='display: flex;'>
      <router-link to='/'>
        <PuzzleCodes 
          width='13rem'
          theme='light'
        />
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <router-link class='nav-link' to='/'>Inicio</router-link>
    <span><v-icon icon='mdi-slash-forward' /></span>
    <router-link class='nav-link' to='/sudokus'>Sudokus</router-link>
    <template v-slot:append>
      <v-btn icon='mdi-menu'
        @click='drawer = !drawer'
      ></v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location='right'
  >
    <v-list density="compact" nav>
      <v-list-item to='/' title="Inicio" value="home"></v-list-item>
      <v-list-item to='/sudokus' title="Sudokus" value="sudokus"></v-list-item>
    </v-list>
   </v-navigation-drawer>
</template>

<script lang='ts' setup>
	import { ref } from 'vue';
	import PuzzleCodes from '../PuzzleCodes.vue';


	const drawer = ref<boolean>(false)


</script>

<style lang="scss">
	
	.nav-link{
		color: white;
		padding: 0px 0.25rem;
		margin: 0px 0.75rem;
		text-decoration: none;
		font-size: 18px;
	}

</style>