const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ERRORS: (state, errors) => {
    state.errors = errors;
  },
};

export default mutations;
