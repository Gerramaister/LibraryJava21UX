import { defineStore } from "pinia";

export const useCreateImageStore = defineStore({
    id: 'createImage',

    state: () => ({
        index: 0,
        books: [],
        currentSearch: '',
        addedGenres: [],
        removedGenres: [],
    }),

    actions: {

        //Subjects is currently a work in progress att the openlibrary api so we they need their different search since they use works insted of docs
        //Search that gets data and turns it into a json file. Then it pushes it to the arrat books in state which other website components & views get their info from

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
                        fetch("http://openlibrary.org" + data.works[i].key + ".json").then((response) => response.json()).then((workData) => {
                            if(typeof workData.description !== 'undefined')
                            {
                                if(typeof workData.description.value !== 'undefined')
                                {
                                    newBook.bookDescription = workData.description.value;
                                }
                                else {
                                    newBook.bookDescription = workData.description;
                                }
                            }
                            else {
                                newBook.bookDescription = "No Description Available"
                            }
                        });
                        newBook.bookPublish = data.works[i].first_publish_year;
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
                        else if (this.removedGenres.length > 0) {
                            console.log("third")
                            if (
                                data.docs[i].subject.filter(e => this.removedGenres.includes(e)).length <= 0
                            ) {
                                this.NewBookCreation(data, i);
                            }
                        }
                        else if (this.removedGenres.length <= 0 && this.addedGenres.length <= 0) {
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
            fetch("http://openlibrary.org" + data.docs[i].key + ".json").then((response) => response.json()).then((workData) => {
                if(typeof workData.description !== 'undefined')
                {
                    //Since its a open api and people can add description att wills somtime the description value is description and sometimes its description.value
                    //Quite good design if u ask me
                    if(typeof workData.description.value !== 'undefined')
                    {
                        newBook.bookDescription = workData.description.value;
                    }
                    else {
                        newBook.bookDescription = workData.description;
                    }
                }
                else {
                    newBook.bookDescription = "No Description Available"
                }
            });
            newBook.bookPublish = data.docs[i].publish_date[0];
            newBook.bookAuthors = data.docs[i].author_name[0];
            newBook.bookTitles = data.docs[i].title;
            newBook.bookCovers =
                "https://covers.openlibrary.org/b/id/" +
                data.docs[i].cover_i +
                "-M.jpg";
            this.books.push(newBook);
        },
    },
})