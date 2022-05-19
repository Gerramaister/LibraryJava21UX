<template>
  <div class="container justify-content-center">
    <h1 style="text-align: center">Utforska</h1>
    <div class="input-group mb-3">
      <input
        ref="inputValue"
        type="text"
        class="form-control"
        placeholder="Search..."
        aria-label="Search..."
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">
          <svg
            @click="TopSearch()"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </span>
      </div>
    </div>
    <div>
      <h2 style="text-align: center">Toppresultat</h2>
    </div>
    <hr class="xfactor" />
  </div>
  <div>
    <BookWithTitleAndAuthorVue
      v-for="book of createImageStore.books"
      :key="book"
      :bookCover="book.bookCovers"
      :bookAuthor="book.bookAuthors"
      :bookTitle="book.bookTitles"
    />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useCreateImageStore } from "../stores/CreateImage";
import BookWithTitleAndAuthorVue from "../components/BookWithTitleAndAuthorVue.vue";
export default {
  data() {
    return {
      books: [],
    };
  },

  computed: {
    ...mapStores(useCreateImageStore),
  },

  methods: {
    TopSearch() {
      this.createImageStore.currentSearch = this.$refs.inputValue.value;
      this.createImageStore.FindBookWithSearch();
    }
  },

  components: { BookWithTitleAndAuthorVue },
};
</script>

<style scoped>
</style>