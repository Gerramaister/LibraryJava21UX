<template>
  <div class="row">
    <div class="col images">
      <img ref="createdimg"/>
    </div>
    <div class="col texts">
      <p style="font-weight : bold;">{{title}}</p>
      <p>{{author}}</p>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            image: this.bookCover,
            title: this.bookTitle,
            author: this.bookAuthor,
        }
    },
    props: ['bookCover', 'bookTitle', 'bookAuthor'],

    mounted() {
        this.$refs.createdimg.src = this.image;
    }
}
</script>

<style scoped>
.images img {
  margin-top: 25px;
  width: 120px;
  height: 200px;
}
.texts {
  margin-top: 25px;
  float: right;
}
</style>