import { createRouter, createWebHistory } from 'vue-router'

import bucketlist from "../views/moment/bucketlist.vue";
import Login from "../views/login.vue";
import singleitem from "../views/moment/singleitem.vue";
import additem from "../views/moment/additem.vue";
import edititem from "../views/moment/edititem.vue";
import register from "../views/register.vue"; 

const routes = [
  {
    path: "/",
    name: 'login',
    component: Login
    },
  
  {
    path: "/bucketlist",
    name: "bucketlist",
    component: bucketlist
    },

    {
        path: '/moment/:id',
        name: "singleitem",
        component: singleitem,
        props: true
    },
    
    {
        path: 'new-item',
        name:"additems",
        component: additem
    },

    {
        path: '/moment/:id/edit',
        name: "edititem",
        component: edititem,
        props: true
    },

    {
        path: '/register',
        name: "register",
        component: register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router