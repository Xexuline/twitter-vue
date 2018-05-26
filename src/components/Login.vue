<template>
<div>
  <form @submit="submit">
    <h1>Login</h1>
    <input type="text" v-model="user" required>
    <input type="password" v-model="passwd" required>
    <button type="submit">Iniciar Sesión</button>
  </form>
</div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'app-login',
  data() {
    return {
      user: '',
      passwd: '',
      errors: [],
    };
  },
  methods: {
    ...mapActions(['sendLogin']),
    validate() {
      if (this.user.includes('@')) {
        if (!this.validEmail(name)) this.errors.push('invalid-email');
      }
      if (!(this.user.length > 0)) this.errors.push('empty-length');
      if (!(this.passwd.length > 0)) this.errors.push('empty-password');
      return this.errors.length === 0;
    },
    validEmail(email) {
      const reg = new RegExp(
        '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
      );
      reg.test(email);
    },
    async submit() {
      if (this.validate()) {
        await this.sendLogin({ user: this.user, pass: this.passwd });
      }
    },
  },
};
</script>
<style>

</style>
