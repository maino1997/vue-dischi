<template>
  <main>
    <div class="container">
      <div class="col-5" v-for="item in List" :key="item.poster">
        <div class="content">
          <img :src="item.poster" :alt="item.author" />
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
};
</script>

<style scoped lang="scss">
@import "../sass/vars.scss";
main {
  background-color: $light_blue;
  height: calc(100vh - 50px);
}

h2 {
  color: white;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-top: 10px;
}

p {
  color: grey;
  font-size: 17px;
  margin-top: 10px;
}

img {
  width: 100%;
  height: 150px;
}

.col-5 {
  width: 20%;
  text-align: center;
  padding: 0 10px;
  .content {
    background-color: $dark_blue;
    height: 350px;
    margin: 30px 0;
    padding: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.8);
  }
}
</style>