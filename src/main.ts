import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import './style/tailwind.css'
import router from "./router";
// 导入 pinia
import {createPinia} from 'pinia'

// 1. 创建 pinia 实例
const pinia = createPinia()



const app = createApp(App)
// 5. 创建并挂载根实例
app.use(router)
// 6. 将 pinia 挂载到应用程序
app.use(pinia)
app.mount('#app')
