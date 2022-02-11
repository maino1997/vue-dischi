<template>
  <div>
    <Loader v-if="!isLoaded" />
    <Header :genres="genres" @newGenre="getValue" />
    <Main :List="getRightList" />
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
      genres: [],
      isLoaded: undefined,
      selectedGenre: "",
    };
  },
  computed: {
    getNewArray() {
      return this.images.filter((song) => this.selectedGenre === song.genre);
    },

    getRightList() {
      if (this.selectedGenre) {
        return this.images.filter((song) => this.selectedGenre === song.genre);
      } else {
        return this.images;
      }
    },
  },

  methods: {
    getGenresList() {
      for (let i = 0; i < this.images.length; i++) {
        const newGenre = this.images[i].genre;
        if (!this.genres.includes(newGenre)) {
          this.genres.push(newGenre);
        }
      }
    },
    getImages() {
      this.isLoaded = false;
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.images = res.data.response;
          this.isLoaded = true;
        });
    },
    getValue(value) {
      this.selectedGenre = value;
      console.log(value);
    },
  },

  created() {
    this.getImages();
  },

  updated() {
    this.getGenresList();
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
