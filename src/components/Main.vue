<template>
  <main>
    <div class="container">
      <div class="col-5" v-for="item in List" :key="item.poster">
        <div class="content">
          <img src="item.poster" alt="item.author" />
          <h2>{{ item.title }}</h2>
          <p>{{ item.author }}</p>
          <p>{{ item.year }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: ["List"],
  data() {
    return {
      getImageUrl() {},
    };
  },
};
</script>

<style scoped lang="scss">
main {
  background-color: rgb(22, 64, 155);
  height: 100vh;
}

h2 {
  color: white;
}

p {
  color: grey;
  font-size: 18px;
}

.col-5 {
  width: 20%;
  text-align: center;
  .content {
    background-color: rgb(38, 38, 109);
  }
}
</style>