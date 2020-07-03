<template>
  <div class="profile">
    <p>{{ fullName }}</p>
    <div class="age">
      <p>{{ profile.age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBox",
  props: {
    profile: Object
  },
  computed: {
    fullName() {
      return `${this.profile.lastname}, ${this.profile.surname}`;
    }
  },
  methods: {
    test: () => {
      alert("test");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.profile {
  border: 1px solid red;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
