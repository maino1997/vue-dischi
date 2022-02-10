<template>
  <footer>
    <span v-for="(item, index) in List" :key="item.poster">
      {{ index + 1 }}
    </span>
  </footer>
</template>

<script>
export default {
  name: "Name",
  props: ["List"],
};
</script>

<style>
footer {
  text-align: center;
}
</style>