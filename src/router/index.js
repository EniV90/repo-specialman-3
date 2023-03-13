import { createWebHistory } from 'vue-router'
import Login from '../pages/login.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes,
})

export default router