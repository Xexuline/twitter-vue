const mutations = {
  checkCookies: state => state,
  logIn: (state, token) => {
    state.token = token;
  },
};

export default mutations;
