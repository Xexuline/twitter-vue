import mutations from '@/store/mutations';

describe('Mutations store', () => {
  it('should change token', () => {
    const state = { token: null };
    mutations.logIn(state, 'new token');
    expect(state.token).toBe('new token');
  });
});
