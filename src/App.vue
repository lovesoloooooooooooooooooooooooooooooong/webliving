<template>
  <div id="app">
    <div v-if="$store.state.is_login == false" id="nav">
      <NavHeader />
    </div>
    <div v-if="$store.state.is_login == true">
      <AuthNavHeader />
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
  import NavHeader from "./components/navgation/NavHeader";
  import AuthNavHeader from "./components/navgation/AuthNavHeader"
  export default {
    components: {
      NavHeader,
      AuthNavHeader
    }
  }
</script>
