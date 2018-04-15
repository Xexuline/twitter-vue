import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Router from 'vue-router';
// import Vue from 'vue';
import getters from '@/store/getters';
import state from '@/store/initialStore';

import MainManager from '@/components/MainManager';
import PrincipalLogin from '@/components/PrincipalLogin';
import Dashboard from '@/components/Dashboard';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);
const router = new Router();

describe('MainManager.vue ', () => {
  // let getters;
  let store;
  let components;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      getters,
    });

    components = { 'app-principal-login': PrincipalLogin, 'app-dashboard': Dashboard };
  });

  it('should render login component', () => {
    const wrapper = shallow(MainManager, {
      localVue,
      store,
      stubs: components,
      router,
    });

    const h1 = wrapper.find('.login h1');
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(h1.text()).toBe('Título de twitter');
  });

  it('should render dashboard component', () => {
    const tokenizedStore = new Vuex.Store({ state: { token: 'defined' }, getters });
    const wrapper = shallow(MainManager, {
      localVue,
      stubs: components,
      store: tokenizedStore,
      router,
    });

    const h1 = wrapper.find('div h1');
    expect(h1.text()).toBe('Dashboard');
  });
});
