import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "typeface-poppins";
import router from './router'
import './axios'
import store from "./store"

createApp(App).use(router).use(store).mount('#app')

