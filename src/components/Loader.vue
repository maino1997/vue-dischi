<template>
  <div class="loader">
    <h2>La pagina sta caricando</h2>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped lang="scss">
.loader {
  background: rgba(167, 166, 166, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
    text-transform: uppercase;
  }
}
</style>