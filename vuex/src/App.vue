<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/form">Form</router-link>
    </div>
    <router-view @updateView="updateView" />
    <ProfileBox :profile="profile" />
  </div>
</template>

<script>
import ProfileBox from "./components/ProfileBox.vue";
export default {
  name: "App",
  data() {
    return {
      profile: this.$store.getters.profile,
    };
  },
  components: {
    ProfileBox,
  },
  methods: {
    updateView(status) {
      console.log("updateView()", status);
      //this.status = status;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
