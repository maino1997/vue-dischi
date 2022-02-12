<template>
  <div>
    <Loader v-if="!isLoaded" />
    <Header :genres="genres" @newGenre="getGenreValue" :authors="authors" />
    <Main :List="getRightList" />
    <Footer :List="mainList" />
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
      mainList: [],
      genres: [],
      authors: [],
      isLoaded: undefined,
      selectedValue: "",
    };
  },
  computed: {
    getNewArray() {
      return this.mainList.filter((song) => this.selectedValue === song.genre);
    },

    getRightList() {
      if (this.genres.includes(this.selectedValue)) {
        return this.mainList.filter(
          (song) => this.selectedValue === song.genre
        );
      } else if (this.authors.includes(this.selectedValue)) {
        return this.mainList.filter(
          (song) => this.selectedValue === song.author
        );
      } else {
        return this.mainList;
      }
    },

    // SE VOGLIO FARE QUESTO DEVO PUSHARE NEGLI ARRAY DI GENRE E AUTHORS GLI OGGETTI E NON SOLO LE STRINGHE
    // getRightList() {
    //   if (this.genres.includes(this.selectedValue)) {
    //     this.mainList = this.genres;
    //   } else if (this.authors.includes(this.selectedValue)) {
    //     this.mainList = this.authors;
    //   }
    //   console.log(this.mainList);
    //   return this.mainList;
    // },
  },

  methods: {
    getGenresList() {
      for (let i = 0; i < this.mainList.length; i++) {
        const newGenre = this.mainList[i].genre;
        if (!this.genres.includes(newGenre)) {
          this.genres.push(newGenre);
        }
      }
    },

    getAuthorsList() {
      for (let i = 0; i < this.mainList.length; i++) {
        const newAuthor = this.mainList[i].author;
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
          this.mainList = res.data.response;
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
