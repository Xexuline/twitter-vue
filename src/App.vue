<template>
  <div id="app">
    <component
    :is="currentPage"
    ></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  beforeMount() {
    debugger;
    this.currentPage = this.getToken()
      ? this.dynamicPages[1]
      : this.dynamicPages[0];
  },
  data() {
    return {
      currentPage: null,
      dynamicPages: ['app-principal-login', 'app-dashboard'],
    };
  },
  methods: {
    ...mapGetters(['getToken']),
    checkLogged() {
      const token = window.sessionStorage.getItem('token');
      return token;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
/* #app {
  font-family: "Segoe UI",Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
