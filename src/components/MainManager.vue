<template>
  <div id="app">
    <component
    :is="currentPage"
    ></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PrincipalLogin from '@/components/PrincipalLogin';
import Dashboard from '@/components/Dashboard';

export default {
  name: 'App',
  beforeMount() {
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
  },
  components: {
    'app-principal-login': PrincipalLogin,
    Dashboard,
  },
};
</script>

<style>

</style>
