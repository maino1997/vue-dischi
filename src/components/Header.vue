<template>
  <header>
    <img src="../assets/spotify.png" alt="" />
    <Sel :genres="genres" @newGenre="newGenre" />
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
    newGenre(value) {
      this.$emit("newGenre", value);
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