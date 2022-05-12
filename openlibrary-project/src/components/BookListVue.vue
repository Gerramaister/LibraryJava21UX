<template>
  <div class="BookList">
    <div ref="bookrow"></div>
  </div>
</template>

<script>
import {create_images} from '../assets/Modules/CreateImages.js'

export default {
  props: ["title", "genre"],

  data(){
    return {
      BookGenre: this.genre,
      Title: this.title,
    }
  },
  methods: {
  },
  mounted() {
    create_images(this.$refs.bookrow, this.BookGenre, this.Title);
  },
};
</script>

<style>

.BookList h1 {
  position: static;
}

.BookList {
  padding-left: 25px;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
}
.BookList img {
  margin: 10px;
  width: auto;
  height: 150px;
}
</style>