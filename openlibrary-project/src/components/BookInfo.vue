<template>
  <div class="flex">

    <div id="book">
      <h1> {{title}}</h1>
      <h3> {{author}}</h3>
      <p>{{year}}</p>
    </div>
    <div id='imgDiv'>
      <img alt="bookimg" ref="siteImage" />
    </div>
  </div>
    <div id='divDesc'>
      <p>{{description}}</p>
    </div>
</template>

<script>
export default {

data() {
  return {
    title: this.bookTitle,
    author: this.bookAuthor,
    year: this.publishYear,
    description: this.bookDescription,
    image: this.bookImage,
  }
},

props: ['bookTitle', 'bookAuthor', 'publishYear', 'bookImage', 'bookDescription'],

mounted() {
    this.$refs.siteImage.src = this.image;
  }
}
</script>

<style scoped>

#divDesc {
  padding-top: 10px;
  overflow-wrap: break-word;
}

.flex{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
     }
</style>