import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// TUYỆT ĐỐI KHÔNG CÓ DÒNG app.use(tailwindcss) NHÉ!

app.mount('#app')