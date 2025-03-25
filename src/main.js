import './assets/styles/main.css'
import './assets/styles/navbar.css'
import './assets/styles/footer.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
