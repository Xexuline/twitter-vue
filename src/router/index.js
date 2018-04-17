import Vue from 'vue';
import Router from 'vue-router';
import MainManager from '@/components/MainManager';
// import PrincipalLogin from '@/components/PrincipalLogin';
import Login from '@/components/Login';
// const LAZY_LOGIN = () => import(/* webpackChunkName: "common" */ '@/components/Login');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-main-manager',
      component: MainManager,
    },
    {
      path: '/login',
      name: 'app-login',
      component: Login,
    },
    {
      path: '/register',
      name: 'app-register',
    },
  ],
});
