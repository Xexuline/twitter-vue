import { shallow, createLocalVue } from '@vue/test-utils';
import PrincipalLogin from '@/components/PrincipalLogin';
import Router from 'vue-router';

const localVue = createLocalVue();
localVue.use(Router);
const router = new Router();
describe('PrincipalLogin.vue', () => {
  it('should render', () => {
    const wrapper = shallow(PrincipalLogin, { localVue, router });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.find('.login h1').text()).toBe('Título de twitter');
  });

  it('redirects to login when login button clicked', () => {
    const wrapper = shallow(PrincipalLogin, { localVue, router });
    const button = wrapper.find('a[href="#/login"]');
    button.trigger('click');

    expect(wrapper.vm.$route.path).toBe('/login');
  });

  it('redirects to register when register button clicked', () => {
    const wrapper = shallow(PrincipalLogin, { localVue, router });
    const button = wrapper.find('a[href="#/register"]');
    button.trigger('click');

    expect(wrapper.vm.$route.path).toBe('/register');
  });
});
