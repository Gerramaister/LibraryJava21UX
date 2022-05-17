<template>
  <div class="flex">

    <div id="book"></div>
    <div id='imgDiv'></div>
  
  </div>
    <div id='divDesc'></div>
</template>

<script>
export default {

}
let book = ("OL45883W")

fetch('http://openlibrary.org/search.json?q=' + book)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    displaybook(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


function displaybook(data) {
  const book = data.docs[0];
  const bookDiv = document.getElementById("book");
  const bookName = book.title;
  const heading = document.createElement("h1");
  heading.innerHTML = bookName;
  bookDiv.appendChild(heading)

  const bookAuthor = book.author_name
  const author = document.createElement("h3");
  author.innerHTML = bookAuthor;
  bookDiv.appendChild(author)

  const publishedYear = book.publish_year[0]
  const year = document.createElement("p")
  year.innerHTML = "Published: " + publishedYear;
  bookDiv.appendChild(year)

  const imgDiv = document.getElementById('imgDiv')
  const bookImg = document.createElement("img");
  bookImg.src = "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"
  imgDiv.appendChild(bookImg)


}
fetch('https://openlibrary.org/works/' +  book + '.json')
  .then((data) => {
    if (data.ok) {
      return data.json()
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }

  }).then((completedata) => {
    const divDesc = document.getElementById("divDesc")
    const desc = document.createElement("p")
    desc.innerHTML = completedata.description
    divDesc.appendChild(desc)
  })
</script>

<style scoped>

.flex{
    display: flex;
    flex-direction: row;

     }
</style>