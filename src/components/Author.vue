<template>
  <select v-model="selectedAuthor" @change="setAuthor">
    <option value="" selected>TUTTI</option>
    <option v-for="author in authors" :key="author" :value="author">
      {{ author }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Authors",
  props: ["authors"],
  data() {
    return {
      selectedAuthor: "",
    };
  },
  methods: {
    setAuthor() {
      this.$emit("newGenre", this.selectedAuthor);
      console.log(this.selectedAuthor);
    },
    logAuthor() {
      console.log(this.selectedAuthor);
    },
  },
};
</script>

<style>
</style>