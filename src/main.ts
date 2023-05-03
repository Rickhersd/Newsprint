import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

//Vuetify
import 'vuetify/styles'
import './sass/main.scss'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

createApp(App).use(vuetify).use(router).mount('#app')
