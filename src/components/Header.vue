<template>
  <header>
    <img src="../assets/spotify.png" alt="" />
    <Sel
      :genres="genres"
      @newGenre="newGenre"
      placeholder="Filtra per genere"
    />
    <Author
      :authors="authors"
      @newGenre="newGenre"
      placeholder="Filtra per autore"
    />
  </header>
</template>

<script>
import Author from "./Author.vue";
import Sel from "./Sel.vue";

export default {
  name: "Header",
  components: {
    Sel,
    Author,
  },
  props: ["genres", "authors"],
  methods: {
    newGenre(value) {
      this.$emit("newGenre", value);
    },
    newAuthor(value) {
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