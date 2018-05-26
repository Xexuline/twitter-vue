const actions = {
  sendLogin: ({ commit }, loginInfo) => {
    const user = loginInfo.user;
    const pass = loginInfo.pass;
    // fake validation, should be done on backedn
    function validEmail(email) {
      const reg = new RegExp(
        '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
      );
      return reg.test(email);
    }
    const errors = [];

    if (!user.includes('@')) {
      if (!validEmail(user)) errors.push('invalid-email');
    }
    if (!(user.length > 0)) errors.push('empty-username');
    if (!(pass.length > 0)) errors.push('empty-password');

    if (errors.length > 0) commit('SET_ERRORS', errors);
    else commit('SET_TOKEN', Date.now());
  },
};

export default actions;
