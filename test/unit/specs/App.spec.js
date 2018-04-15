import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// import Vue from 'vue';
import getters from '@/store/getters';
import state from '@/store/initialStore';

import App from '@/App';
import PrincipalLogin from '@/components/PrincipalLogin';
import Dashboard from '@/components/Dashboard';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue ', () => {
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
    const wrapper = shallow(App, {
      localVue,
      store,
      stubs: components,
    });

    const h1 = wrapper.find('.login h1');
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(h1.text()).toBe('Pagina login inicial');
  });

  it('should render dashboard component', () => {
    const tokenizedStore = new Vuex.Store({ state: { token: 'defined' }, getters });
    const wrapper = shallow(App, { localVue, stubs: components, store: tokenizedStore });

    const h1 = wrapper.find('div h1');
    expect(h1.text()).toBe('Dashboard');
  });
});
