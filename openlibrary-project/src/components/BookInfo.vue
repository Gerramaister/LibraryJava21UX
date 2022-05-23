<template>
  <div class="flex">
    <div id="book"></div>
    <div id='image'></div>

  </div>
  <div id='description'></div>
</template>

<script>
export default {

}
let book = ("OL45883W") // skall föreställa sökfunktion än så länge

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

  const bookName = book.title; //Hämtar titel
  const heading = document.createElement("h1");
  heading.innerHTML = bookName;
  bookDiv.appendChild(heading)

  const author = book.author_name //Hämtar författarens namn
  const authorElem = document.createElement("h3");
  authorElem.innerHTML = author;
  bookDiv.appendChild(authorElem)

  const publishedYear = book.publish_year[0]; //Hämtar året boken släpptes
  const year = document.createElement("p");
  year.innerHTML = "Published: " + publishedYear;
  bookDiv.appendChild(year)

  const genre = book.subject[0] //Hämtar genre
  const genreElem = document.createElement("p")
  genreElem.innerHTML = genre;
  bookDiv.appendChild(genreElem)

  const image = document.getElementById('image') //Hämtar omslag
  const bookImg = document.createElement("img");
  bookImg.src = "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"
  image.appendChild(bookImg)
 
}
fetch('https://openlibrary.org/works/' + book + '.json') //Fetch för beskrivning
  .then((data) => {
    if (data.ok) {
      return data.json()
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }

  }).then((completedata) => {
    const description = document.getElementById("description") //Hämtar beskrivning
    const desc = document.createElement("p")
    desc.innerHTML = completedata.description
    description.appendChild(desc)
  })
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;

}

@media screen and (min-width: 600px) {
  #image {
    padding-left: 600px;
  }

}

* {
  padding: 7px;
}
</style>