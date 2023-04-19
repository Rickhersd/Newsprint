import { createApp } from 'vue'
import App from './App.vue'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


//VueRouter
import { createRouter, createWebHashHistory} from 'vue-router'
import Sudoku from './components/sudoku/Sudoku.vue'
import Home from './components/Home.vue'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },

})

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home},
    { path: '/tutorial', component: Home},
    { path: '/tutorial/:game', component: Home},
    { path: '/sudoku/list', component: Sudoku },
    { path: '/sudoky/:id', component: Home},
  ]
})

createApp(App).use(vuetify).use(router).mount('#app')
