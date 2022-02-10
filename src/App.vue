<template>
  <div>
    <Loader v-if="!isLoaded" />
    <Header />
    <Main :List="images" />
    <Footer :List="images" />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
import Loader from "./components/Loader.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Main,
    Header,
    Loader,
    Footer,
  },
  data() {
    return {
      images: [],
      isLoaded: undefined,
    };
  },
  methods: {
    getImages() {
      this.isLoaded = false;
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.images = res.data.response;
          this.isLoaded = true;
        });
    },
  },

  mounted() {
    this.getImages();
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
