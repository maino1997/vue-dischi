<template>
  <select v-model="selectedGenre">
    <option
      v-for="genre in genres"
      :key="genre"
      :value="genre"
      @change="$emit('clicked', selectedGenre)"
    >
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
};
</script>

<style>
</style>