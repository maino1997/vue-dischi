<template>
  <header>
    <img src="../assets/spotify.png" alt="" />
    <Sel :genres="genres" @clicked="selected" />
  </header>
</template>

<script>
import Sel from "./Sel.vue";

export default {
  name: "Header",
  components: {
    Sel,
  },
  props: ["genres"],
  methods: {
    selected(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/vars.scss";
header {
  background-color: $dark_blue;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
</style>