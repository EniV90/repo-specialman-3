import { createRouter, createWebHistory } from 'vue-router'

import bucketlist from "../views/bucketlist.vue";
import Login from "../views/login.vue";
import singleitem from "../views/singleitem.vue";
import additem from "../views/additem.vue";
import edititem from "../views/edititem.vue";
import register from "../views/register.vue"; 

const routes = [
  {
    path: "/",
    component: Login
    },
  
  {
    path: "/bucketlist",
    component: bucketlist
    },

    {
        path: '/singleitem',
        component: singleitem
    },
    
    {
        path: '/additem',
        component: additem
    },

    {
        path: '/edititem',
        component: edititem
    },

    {
        path: '/register',
        component: register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router