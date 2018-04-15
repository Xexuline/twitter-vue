import { mount } from '@vue/test-utils';
import PrincipalLogin from '@/components/PrincipalLogin';

describe('app-principal-login', () => {
  it('should render', () => {
    const wrapper = mount(PrincipalLogin);
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.find('.login h1').text()).toBe('Pagina login inicial');
  });
});
