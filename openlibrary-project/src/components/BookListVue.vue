<template>
  <h1>{{ Title }}</h1>
  <div class="BookList">
    <div ref="bookrow">
      <img v-for="book in this.BooksValues" :key="book" :src="book" alt="ye" />
    </div>
  </div>
</template>

<script>
import { create_images } from "../assets/Modules/CreateImages";

export default {
  props: ["title", "genre"],

  data() {
    return {
      BooksValues: [],
      BookGenre: this.genre,
      Title: this.title,
    };
  },
  created() {
    console.log(this.BookGenre);
    //We Create Images and with the genre chosen and push it into the array we loop through to get the bookCovers.
    //If We Use store the image retains from previous BookList components witch we dont want.
    create_images(this.BookGenre, this.BooksValues);
    console.log(this.BooksValues);
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