import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Router from 'vue-router';

import App from '@/App';

const localVue = createLocalVue();
const router = new Router();
localVue.use(Vuex);
localVue.use(Router);

describe('App.vue ', () => {
  it('should render', () => {
    const wrapper = shallow(App, {
      localVue,
      router,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
