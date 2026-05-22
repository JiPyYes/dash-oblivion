import { createRouter, createWebHistory } from "vue-router";

import clients from "./components/clients.vue";
import finances from "./components/finances.vue";
import review from "./components/review.vue";
import sales from "./components/sales.vue";
import Login from "./components/login.vue";
import page404 from "./components/page404.vue";

const routes = [
    {path:'/',component:review,name:'review'},
    {path:'/login',component:Login,name:'login'},
    {path:'/sales', component:sales, name:'sales'},
    {path:'/finances',component:finances,name:'finances'},
    {path:'/clients',component:clients,name:'clients'},

    {path:'/:pathName(.*)', component: page404, name:'404'},

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) =>{
    next()
})