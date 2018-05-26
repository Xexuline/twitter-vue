import mutations from '@/store/mutations';

describe('Mutations store', () => {
  it('should change token', () => {
    const state = { token: null };
    mutations.SET_TOKEN(state, 'new token');
    expect(state.token).toBe('new token');
  });

  it('should change token', () => {
    const state = { errors: [] };
    expect(state.errors.length).toBe(0);

    const errors = ['error1', 'error2'];
    mutations.SET_ERRORS(state, errors);
    expect(state.errors.length).toBe(errors.length);
  });
});
