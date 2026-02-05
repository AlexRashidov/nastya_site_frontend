
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
alert('main.js стартовал')

const app = createApp(App)
app.use(router)
app.mount('#app')
alert('Vue смонтирован')
