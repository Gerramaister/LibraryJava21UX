import { defineStore } from "pinia";

export const useCreateImageStore = defineStore({
    id: 'createImage',

    state: () => ({
        books: [],
        currentSearch: '',
        addedGenres: [],
        removedGenres: [],
    }),

    actions: {

        FindBookWithTagSearch() {
            this.books = [];
            console.log("Tag Search : " + this.currentSearch)

            fetch("https://openlibrary.org/subjects/" + this.currentSearch + ".json")
                .then((response) => response.json())
                .then((data) => {
                    for (let i = 0; i < data.works.length; i++) {
                        if (typeof data.works[i].cover_id === "undefined") {
                            continue;
                        }
                        let newBook = {}
                        newBook.bookAuthors = data.works[i].authors[0].name;
                        newBook.bookTitles = data.works[i].title;
                        newBook.bookCovers =
                            "https://covers.openlibrary.org/b/id/" +
                            data.works[i].cover_id +
                            "-M.jpg";

                        this.books.push(newBook);

                    }
                    if (this.books.length <= 0) {
                        alert("No Books Found!");
                    }
                })
        },




        FindBookWithSearch() {
            this.books = [];
            console.log("Added Genres : " + this.addedGenres)
            console.log("Removed Genres : " + this.removedGenres)
            console.log("Search Text : " + this.currentSearch)

            this.addedGenres;
            this.removedGenres;


            fetch("http://openlibrary.org/search.json?q=" + this.currentSearch)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Searching for data");
                    for (let i = 0; i < data.docs.length; i++) {
                        if (
                            typeof data.docs[i].cover_i === "undefined" ||
                            typeof data.docs[i].subject === "undefined"
                        ) {
                            continue;
                        }
                        if (this.addedGenres.length > 0 && this.removedGenres.length > 0) {
                            console.log("First")
                            if (
                                data.docs[i].subject.filter(e => this.addedGenres.includes(e)).length > 0 &&
                                data.docs[i].subject.filter(e => this.removedGenres.includes(e)).length <= 0
                            ) {
                                this.NewBookCreation(data, i);
                            }
                        }
                        else if (this.addedGenres.length > 0) {
                            console.log("Second")
                            if (
                                data.docs[i].subject.filter(e => this.addedGenres.includes(e)).length > 0
                            ) {
                                this.NewBookCreation(data, i);
                            }
                        }
                        else if(this.removedGenres.length > 0) {
                            console.log("third")
                            if (
                                data.docs[i].subject.filter(e => this.removedGenres.includes(e)).length <= 0
                            ) {
                                this.NewBookCreation(data, i);
                            }
                        }
                        else if(this.removedGenres.length <= 0 && this.addedGenres.length <= 0)
                        {
                            this.NewBookCreation(data, i);
                        }
                    }
                    if (this.books.length <= 0) {
                        alert("No Books Found!");
                    }
                });
        },

        NewBookCreation(data, i) {
            let newBook = {};
            newBook.bookAuthors = data.docs[i].author_name[0];
            newBook.bookTitles = data.docs[i].title;
            newBook.bookCovers =
                "https://covers.openlibrary.org/b/id/" +
                data.docs[i].cover_i +
                "-M.jpg";
            console.log(data.docs[i].cover_i);

            this.books.push(newBook);
        },
    },
})