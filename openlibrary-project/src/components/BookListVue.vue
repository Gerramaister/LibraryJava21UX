<template>
  <CreateImages ref="createImages"/>
  <div class="BookList">
    <div ref="bookrow"></div>
  </div>
</template>

<script>
import CreateImages from "../components/CreateImages.vue";

export default {
  props: ["title", "genre"],

  data(){
    return {
      BookGenre: this.genre,
      Title: this.title,
    }
  },
  components: {CreateImages},
  methods: {
  },
  mounted() {
    this.$refs.createImages.create_images(this.$refs.bookrow, this.BookGenre, this.Title);
  },
};
</script>

<style>
.BookList {
  padding-left: 25px;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
}
.BookList img {
  margin: 10px;
  width: 90px;
}
</style>