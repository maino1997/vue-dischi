<template>
  <div>
    <Loader v-if="!isLoaded" />
    <Header :genres="genres" @newGenre="getGenreValue" :authors="authors" />
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
      authors: [],
      rightList: [],
      isLoaded: undefined,
      selectedValue: "",
    };
  },
  computed: {
    getNewArray() {
      return this.images.filter((song) => this.selectedValue === song.genre);
    },

    getRightList() {
      if (this.genres.includes(this.selectedValue)) {
        return this.images.filter((song) => this.selectedValue === song.genre);
      } else if (this.authors.includes(this.selectedValue)) {
        return this.images.filter((song) => this.selectedValue === song.author);
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

    getAuthorsList() {
      for (let i = 0; i < this.images.length; i++) {
        const newAuthor = this.images[i].author;
        if (!this.authors.includes(newAuthor)) {
          this.authors.push(newAuthor);
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
    getGenreValue(value) {
      this.selectedValue = value;
      console.log(value);
    },
    getAuthorValue(value) {
      this.selectedAuthor = value;
      console.log(value);
    },
  },

  created() {
    this.getImages();
  },

  updated() {
    this.getGenresList();
    this.getAuthorsList();
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
