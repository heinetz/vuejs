<template>
  <div>
    <p class="young" v-if="$store.getters.age < 50">Junger Spund</p>
    <p class="old" v-if="$store.getters.age > 50">Alter Hund</p>
    <DisplayBox>Das hier soll angezeigt werden</DisplayBox>
  </div>
</template>

<script>
import DisplayBox from "@/components/DisplayBox.vue";
export default {
  name: "Display",
  components: {
    DisplayBox,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.young {
  color: green;
}

.old {
  color: red;
}
</style>
