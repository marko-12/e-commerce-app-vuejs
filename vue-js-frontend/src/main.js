import './assets/main.css'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

const options = {
  // You can set your default options here
}
app.use(Toast, options)
app.use(BootstrapVue3)
app.use(createPinia())
app.use(router)

app.mount('#app')
