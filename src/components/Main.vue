<template>
  <main>
    <div class="container">
      <div class="col-5" v-for="item in List" :key="item.poster">
        <div class="content">
          <img src="item.poster" alt="item.author" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: ["List"],
};
</script>

<style scoped lang="scss">
main {
  background-color: rgb(22, 64, 155);
  height: 100vh;
}

.col-5 {
  width: 20%;
  .content {
    background-color: rgb(38, 38, 109);
  }
}
</style>