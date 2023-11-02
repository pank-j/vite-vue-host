import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// const NuxtApp = defineAsyncComponent(() => import('remoteApp/NuxtApp'))
const AppFooter = defineAsyncComponent(() => import('remoteApp/AppFooter'))
const MoviesList = defineAsyncComponent(() => import('remoteApp/MoviesList'))
app.component('AppFooter', AppFooter)
// app.component('NuxtApp', NuxtApp)
app.component('MoviesList', MoviesList)
app.mount('#app')
