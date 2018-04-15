import actions from '@/store/actions';

describe('Actions store', () => {
  let mockLogin;
  let data;
  beforeEach(() => {
    mockLogin = (state, payload = 'mocked data') => {
      data = payload;
    };
  });
  it('should mock login', () => {
    actions.login({ commit: mockLogin });
    expect(data).toBeDefined();
  });
});
