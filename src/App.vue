<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html,
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 14pt;
  line-height: 20pt;
  background-attachment: scroll;
  overflow-y: auto;
}
#app {
  max-height: 98vh;
  overflow: hidden;
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
