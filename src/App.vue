<template>
  <div>
    <Loader v-if="!isLoaded" />
    <Header />
    <Main :List="images" />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Main,
    Header,
    Loader,
  },
  data() {
    return {
      images: [],
      isLoaded: undefined,
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
    this.isLoaded = false;
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((res) => {
        this.images = res.data.response;
        this.isLoaded = true;
      });
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
