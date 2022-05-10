<template></template>
<script>
export default {

  methods: {
    create_images: function (whatToAppend, BookGenre, title) {
      fetch("https://openlibrary.org/subjects/" + BookGenre + ".json")
        .then((response) => response.json())
        .then((data) => {
          let newData = data.works;
          let h1 = document.createElement("h1");
          h1.innerHTML = title;
          whatToAppend.appendChild(h1);
          for (let i = 0; i < newData.length; i++) {
            if (newData[i].cover_id === null) {
              continue;
            }
            let img = document.createElement("img");
            img.src =
              "https://covers.openlibrary.org/b/id/" +
              newData[i].cover_id +
              "-M.jpg";
            console.log(img.src);
            img.alt = "BookCover";
            img.classList.add("images");

            whatToAppend.appendChild(img);
          }
        });
    },
  },
};
</script>

<style scoped>
</style>
