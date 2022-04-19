


let latestBook = ''
let books = []
if (localStorage.key('booksArray') !== null) {
    books = JSON.parse(localStorage.getItem('booksArray'))
    //console.log(books[0].docs[0].isbn[0])
}





const app = Vue.createApp({
    el: '#viewport',
    data() {
        return {
            searchQuery: '',
            currentBook: "https://cdn.mos.cms.futurecdn.net/bQgcMwEnyhFu6ASuUFrtsn-970-80.jpg.webp",
        }
    },

    mounted() {
        if(document.getElementById('imagelist') !== null)
        {
            this.searchForBooksPictures()
        }
    },

    methods: {
        async searchForDemBooks() {

            if(this.searchQuery == '')
            {
                throw new Error("Query is currently Empty!");
            }

            let response = await fetch('http://openlibrary.org/search.json?q=' + this.searchQuery)
            let jsonx = await response.json()
            console.log(jsonx.docs[0].title)

            this.currentBook = "https://covers.openlibrary.org/b/isbn/" + jsonx.docs[0].isbn[0]+ "-M.jpg"
            latestBook = jsonx
        },


        searchForBooksPictures: function () {
            const content = document.getElementById('imagelist')
            let list = '<ul>'
            for (let i = 0; i < books.length; i++) {
                console.log("Books isbn is : " + books[i].docs[0].isbn[0])
                list += "<li><img src='https://covers.openlibrary.org/b/isbn/" + books[i].docs[0].isbn[0] + "-M.jpg'>"
                list += "<h3>" + books[i].docs[0].title + "</h3>"
                list += "<button onclick='RemoveBook(" + i + ")'>Remove From BookList</button>"
                list += "</li>"
            }
            list += '</ul>'
            content.innerHTML = list
            console.log(list)

        },

        addToBookList() {

            if(latestBook == '')
            {
                throw new Error("Currently No Book Searched!");
            }

            alert("You added : " + latestBook.docs[0].title + " To your collection")

            console.log(latestBook.docs[0].isbn[0])
            books.push(latestBook)
            localStorage.setItem('booksArray', JSON.stringify(books))

        },

        showUserBooks() {
            for (let index = 0; index < books.length; index++) {
                console.log(books[index].docs[0].title)
            }
        },
    },
})
const vm = app.mount('#app')


function RemoveBook(id) {
    if (id > -1) {
        books.splice(id, 1)
    }
    localStorage.setItem('booksArray', JSON.stringify(books))

    console.log(app)
    vm.searchForBooksPictures();
}

