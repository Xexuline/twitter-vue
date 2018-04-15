import { mount } from '@vue/test-utils';
import Dashboard from '@/components/Dashboard';

describe('app-dashboard', () => {
  it('should render', () => {
    const wrapper = mount(Dashboard);
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.is(Dashboard)).toBe(true);
  });
});
