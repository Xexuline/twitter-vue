// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import PrincipalLogin from './components/PrincipalLogin';
import Dashboard from './components/Dashboard';
import store from './store';

Vue.config.productionTip = false;
Vue.component('app-principal-login', PrincipalLogin);
Vue.component('app-dashboard', Dashboard);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
