import Vue from 'vue';
import VueRouter from 'vue-router';
import City from '@/views/City.vue';
import Splash from '@/components/Splash.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'splash',
    component: Splash,
  },
  {
    path: '/city/:city',
    name: 'city',
    component: City,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
