import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import router from './router'
// import Totop from '@/components/Totop'

// createApp(App).use(router)
const app = createApp(App)
// app.component('Totop', Totop)
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
