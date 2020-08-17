import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import( /* webpackChunkName: "Auth" */ "@/views/home/Index"),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import( /* webpackChunkName: "Auth" */ "@/views/auth/Index"),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import( /* webpackChunkName: "Auth" */ "@/views/dashboard/Index"),
        }
    ],
    mode: 'history'
})

export default router