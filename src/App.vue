<template>
  <Main :List="images" />
</template>

<script>
import Main from "./components/Main.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Main,
  },
  data() {
    return {
      images: [],
    };
  },
  // methods: {
  //   getImages() {
  //     axios
  //       .get("https://flynn.boolean.careers/exercises/api/array/music")
  //       .then((res) => {
  //         this.images = res.data.response;
  //       });
  //   },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.images = res.data.response;
      });
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin: auto;
}
</style>
