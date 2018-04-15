import Vue from 'vue';
import Router from 'vue-router';
import MainManager from '@/components/MainManager';
// import PrincipalLogin from '@/components/PrincipalLogin';

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
    },
    {
      path: '/register',
      name: 'app-register',
    },
  ],
});
