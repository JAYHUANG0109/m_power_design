import './assets/main.css'

import { createApp } from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
