import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Car from '../views/Car.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/car',
        name: 'Car',
        component: Car,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
