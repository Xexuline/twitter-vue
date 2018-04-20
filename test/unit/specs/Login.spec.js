import { shallow, createLocalVue } from '@vue/test-utils';
import Login from '@/components/Login';
import Router from 'vue-router';

const localVue = createLocalVue();
localVue.use(Router);
const router = new Router();

describe('Login.vue', () => {
  it('should render text', () => {
    const wrapper = shallow(Login, { localVue, router });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.text()).toContain('Login');
  });

  it('should have password and user empty', () => {
    const wrapper = shallow(Login, { localVue, router });
    expect(wrapper.vm.user).toBe('');
    expect(wrapper.vm.passwd).toBe('');
    /* eslint no-underscore-dangle: ["error", { "allow": ["_data"] }] */
    expect(wrapper.vm._data).toHaveProperty('user');
    expect(wrapper.vm._data).toHaveProperty('passwd');
  });

  it('should render user login', () => {
    const wrapper = shallow(Login, { localVue, router });
    const fkUser = 'fakeUser';
    const fkPwd = 'fakePassword';

    wrapper.setData({ user: fkUser });
    wrapper.setData({ passwd: fkPwd });
    expect(wrapper.vm.user).toContain(fkUser);
    expect(wrapper.vm.passwd).toContain(fkPwd);
  });
});
