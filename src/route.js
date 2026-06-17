import { createRouter, createWebHistory } from "vue-router";

import clients from "./components/clients.vue";
import finances from "./components/finances.vue";
import review from "./components/review.vue";
import sales from "./components/sales.vue";
import Login from "./components/login.vue";
import page404 from "./components/Page404.vue";
import useUsers from "./composables/useUsers";

const users = useUsers()

const routes = [
    {path:'/',component:review,name:'review', meta:{reqauth:true}},
    {path:'/login',component:Login,name:'login'},
    {path:'/sales', component:sales, name:'sales',meta:{reqauth:true}},
    {path:'/finances',component:finances,name:'finances',meta:{reqauth:true}},
    {path:'/clients',component:clients,name:'clients',meta:{reqauth:true}},

    {path:'/:pathName(.*)', component: page404, name:'404'},

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) =>{
    if(users.currentAccount.value.username == '' && users.currentAccount.value.password == '' && to.meta.reqauth){
        next('/login')
    } else if (users.currentAccount.value.username !=  '' && users.currentAccount.value.password != '' && to.name == 'login') {
        next(from.path)
    } else next()
})