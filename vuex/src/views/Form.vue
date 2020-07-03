<template>
  <div>
    <label for="flavor">Your Age?</label>
    <input v-model="computedAge" name="age" />
  </div>
</template>

<script>
export default {
  name: "Form",
  computed: {
    computedAge: {
      get() {
        return this.$store.state.profile.age;
      },
      set(value) {
        this.$emit("updateView", value);
        this.$store.commit("changeAge", value);
      },
    },
  },
};
</script>
