import './assets/main.css'

//import vClickOutside from 'v-click-outside'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(vClickOutside)

app.mount('#app')
