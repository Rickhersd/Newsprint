import { createApp } from 'vue'
import App from './App.vue'

//Vuetify
import 'vuetify/styles'
import './sass/main.scss'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


//VueRouter
import { createRouter, createWebHistory} from 'vue-router'

import Home from './components/Home.vue'
import Sudoku from './components/sudoku/Sudoku.vue'
import Nonogram from './components/nonograms/Nonogram.vue'
import Hitori from './components/hitori/Hitori.vue'
import Futoshiki from './components/futoshiki/Futoshiki.vue'

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
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home},
    { path: '/tutorial', component: Home},
    { path: '/tutorial/:game', component: Home},
    { path: '/sudoku', component: Sudoku },
    { path: '/nonogram', component: Nonogram },
    { path: '/hitori', component: Hitori },
    { path: '/futoshiki', component: Futoshiki },
    { path: '/sudoky/:id', component: Home},
  ]
})

createApp(App).use(vuetify).use(router).mount('#app')
