import getters from '@/store/getters';

describe('Getters store', () => {
  it('should return the undefined app token', () => {
    const state = { token: undefined };
    expect(getters.getToken(state)).toBe(undefined);
  });

  it('should return the app token', () => {
    const state = { token: 'token' };
    expect(getters.getToken(state)).not.toBe(undefined);
  });
});
