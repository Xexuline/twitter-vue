<template>
<div>
  <form action="">
    <h1>Login</h1>
    <input type="text" v-model="user">
    <input type="password" v-model="passwd">
    <button type="submit">Iniciar Sesión</button>
  </form>
</div>
</template>
<script>
export default {
  name: 'app-login',
  data() {
    return {
      user: '',
      passwd: '',
    };
  },
  methods: {},
};
</script>
<style>

</style>
