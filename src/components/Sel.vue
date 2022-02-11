<template>
  <select v-model="selectedGenre" @change="setGenre">
    <option v-for="genre in genres" :key="genre" :value="genre">
      {{ genre }}
    </option>
  </select>
</template>

<script>
export default {
  name: "FIlter",
  props: ["genres"],
  data() {
    return {
      selectedGenre: "",
    };
  },
  methods: {
    setGenre() {
      this.$emit("newGenre", this.selectedGenre);
    },
    logGenre() {
      console.log(this.selectedGenre);
    },
  },
};
</script>

<style>
</style>