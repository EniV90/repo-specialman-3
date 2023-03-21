import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "typeface-poppins";
import router from './router'
import './axios'
import container from './container'

createApp(App).use(router).use(container).mount('#app')

