import Vue from 'vue';
import Vuex from 'vuex';
import state from './initialStore';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
});
export default store;
