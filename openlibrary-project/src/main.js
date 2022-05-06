import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/custom.scss' // import css
import 'bootstrap' // import js

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
