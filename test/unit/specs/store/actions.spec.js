import actions from '@/store/actions';

describe('Actions store', () => {
  let mockLogin;
  let data;
  let state;
  beforeEach(() => {
    mockLogin = (context, payload) => {
      data = payload;
      state = context;
    };
  });
  it('it should login', () => {
    const userLogin = { user: 'a@a.com', pass: 'b' };
    actions.sendLogin({ commit: mockLogin }, userLogin);
    expect(data).toBeDefined();
    expect(state).toBe('SET_TOKEN');
  });

  it('it should contains invalid-email', () => {
    const userLogin = { user: 'a', pass: 'b' };
    actions.sendLogin({ commit: mockLogin }, userLogin);
    expect(data).toContain('invalid-email');
    expect(state).toBe('SET_ERRORS');
  });

  it('it should contains empty-email and empty-password', () => {
    const userLogin = { user: '', pass: '' };
    actions.sendLogin({ commit: mockLogin }, userLogin);
    expect(data).toContain('empty-username');
    expect(data).toContain('empty-password');
    expect(state).toBe('SET_ERRORS');
  });
});
