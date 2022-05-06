<template>
  <h1>{{ title }}</h1>
  <div class="BookList">
    <div class="row" ref="bookrow" style="max-width: 90px"></div>
  </div>
</template>



<script>
export default {
  props: ["title", "genre"],

  methods: {
    create_images: function () {
      fetch("https://openlibrary.org/subjects/sci-fi.json")
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < 15; i++) {

            let newData = data.works
            let r = Math.floor(Math.random() * newData.length);
            console.log("r = " + r + ", max lenght is : " + newData.length)

            let img = document.createElement("img");
            img.src =
              "https://covers.openlibrary.org/b/id/" +
              newData[r].cover_id +
              "-M.jpg";
            console.log(img.src);
            img.alt = "BookCover";
            img.classList.add("images");
            this.$refs.bookrow.appendChild(img);
          }
        });
    },
  },
  mounted() {
    this.create_images();
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