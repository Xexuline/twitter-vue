<template>
<div class="login-container">
  <div class="logo">
    <!-- <svg height="400" width="400">
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)"
      id="g10"><g
        transform="translate(178.0626,235.0086)" id="g12">
        <path
          id="path14"
          style="fill:#435466;fill-opacity:1;fill-rule:nonzero;stroke:none"
          d="M 0,0 -22.669,-39.264 -45.338,0 h -75.491 L -22.669,-170.017 75.491,0 Z" /></g><g
        transform="translate(178.0626,235.0086)"
        id="g16">
        <path
          id="path18"
          style="fill:#435466;fill-opacity:1;fill-rule:nonzero;stroke:none"
          d="M 0,0 -22.669,-39.264 -45.338,0 H -81.565 L -22.669,-102.01 36.227,0 Z" /></g>
          </g>
    </svg> -->
    <div class="logo-texts">
      <div class="text-container"><span class="fa fa-search"></span>Texto de prueba 1</div>
      <div class="text-container"><span class="fa fa-users"></span>Texto de prueba 2</div>
      <div class="text-container"><span class="fa fa-comment"></span>Texto de prueba 3</div>
    </div>
  </div>
  <div class="login">
    <div>
      <div class="header-login">
        <span class="fab fa-twitter fa-3x"></span>
        <router-link to="/login" class="btn-logIn" role="button">Iniciar sesión</router-link>
        </div>
      <h1> Título de twitter </h1>
      <h2> Subtítulo de twitter </h2>
      <div class="button-container">
        <router-link to="/register" class="btn-logIn" role="button">Regístrate</router-link>
        <router-link to="/login" class="btn-logIn" role="button">Iniciar sesión</router-link>
      </div>
    </div>
  </div>

</div>
</template>
<script>
export default {
  name: 'app-principal-login',
};
</script>
<style>
.login-container {
  display: flex;
  flex-flow: column-reverse wrap;
}
.logo {
  /* height: 45vh; */
  background-color: rgba(40, 98, 70, 0.9);
  overflow: hidden;
  display: flex;
}
.text-container {
  height: 40px;
  max-width: 450px;
}
.text-container > span {
  margin-right: 16px;
}
.logo-texts {
  justify-content: center;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-width: 450px;
}
.login {
  height: 45vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.login h1 {
  font-size: 26pt;
}
.login h2 {
  font-size: 20pt;
}
.login > div:first-child {
  /* margin: 2% 10% 0 10%; */
  max-width: 380px;
  min-width: 340px;
}

.header-login {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.btn-logIn {
  border: 1px solid #286246;
  padding: 10px;
  border-radius: 100px;
  text-decoration: none;
  color: #286246;
  font-size: 12pt;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.btn-logIn:hover {
  background-color: rgba(40, 98, 70, 0.1);
}
.btn-logIn:active {
  color: #fff;
  background-color: #286246;
  border-color: #fff;
}
.button-container {
  display: flex;
  flex-flow: column nowrap;
}
.fa-twitter::before {
  color: #286246;
}

@media screen and (min-width: 40rem) {
  .login-container {
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .logo-texts,
  .login {
    width: 45vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: unset;
  }
}
</style>
