// src/views/Home.vue

<template>
  <div>
    <h1>Hi {{ username }}</h1>
    <p>{{ secretMessage }}</p>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  data() {
    console.log("Home.vue:data()");
    return {
      secretMessage: "",
      username: "",
    };
  },
  async created() {
    console.log("Home.vue:async created()");
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }

    this.username = this.$store.getters.getUser.username;

    this.secretMessage = await AuthService.getSecretContent();
  },
  methods: {
    logout() {
      console.log("Home.vue:logout()");
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
