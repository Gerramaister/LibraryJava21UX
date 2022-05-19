<template>
  <div class="WholeBox">
    <div class="WorkBox">
      <div class="row TopBox" id="TopBox">
        <p class="Filter">
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.378 3.54221H1.5C1.08579 3.54221 0.75 3.20033 0.75 2.7786C0.75 2.35687 1.08579 2.01499 1.5 2.01499H11.378C11.6869 1.12523 12.5203 0.487762 13.5 0.487762C14.4797 0.487762 15.3131 1.12523 15.622 2.01499H17.5C17.9142 2.01499 18.25 2.35687 18.25 2.7786C18.25 3.20033 17.9142 3.54221 17.5 3.54221H15.622C15.3131 4.43196 14.4797 5.06943 13.5 5.06943C12.5203 5.06943 11.6869 4.43196 11.378 3.54221Z"
              fill="black"
            />
            <path
              d="M17.5 11.6874C17.9142 11.6874 18.25 11.3455 18.25 10.9238C18.25 10.5021 17.9142 10.1602 17.5 10.1602H7.62197C7.31309 9.27042 6.47966 8.63295 5.5 8.63295C4.52034 8.63295 3.68691 9.27042 3.37803 10.1602H1.5C1.08579 10.1602 0.75 10.5021 0.75 10.9238C0.75 11.3455 1.08579 11.6874 1.5 11.6874H3.37803C3.68691 12.5772 4.52034 13.2146 5.5 13.2146C6.47966 13.2146 7.31309 12.5772 7.62197 11.6874H17.5Z"
              fill="black"
            />
          </svg>
          Filter
        </p>
      </div>
      <div class="row gx-1 x" v-for="i in genres" v-bind:key="i.id">
        <div class="col">
          <div class="y">
            <button
              type="button"
              class="btn btn-light btn-outline-dark"
              @click="FunnyClick($event, i.genre)"
            >
              {{ i.genre }}
            </button>
          </div>
        </div>
        <div class="col">
          <div class="y">
            <button
              type="button"
              class="btn btn-light btn-outline-dark"
              @click="FunnyClick($event, i.genre2)"
            >
              {{ i.genre2 }}
            </button>
          </div>
        </div>
      </div>
      <div class="Sök">
        <router-link to="/SearchView">
          <button class="btn btn-primary Sök-Button" @click="ClickMe()">
            SÖK
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia"
import {useCreateImageStore} from '../stores/CreateImage'
import BookWithTitleAndAuthorVue from "./BookWithTitleAndAuthorVue.vue";

export default {
  data() {
    return {
      genres: [
        { genre: "Horror", genre2: "Love" },
        { genre: "Cats", genre2: "Sci-fi" },
        { genre: "Science", genre2: "History" },
        { genre: "Film", genre2: "Finance" },
        { genre: "Fantasy", genre2: "Fiction" },
      ],
    };
  },
  components: { BookWithTitleAndAuthorVue },

  computed: {
    ...mapStores(useCreateImageStore),
  },


  methods: {
    ClickMe() {
      console.log(this.createImageStore.currentSearch);
      this.createImageStore.FindBookWithSearch();
    },

    FunnyClick(event, genres) {
      if (
        !event.target.classList.contains("Active") &&
        !event.target.classList.contains("Removed")
      ) {
        event.target.classList.add("Active");
        this.createImageStore.addedGenres.push(genres);

      } else if (event.target.classList.contains("Active")) {
        event.target.classList.remove("Active");
        event.target.classList.add("Removed");
        this.createImageStore.addedGenres = this.createImageStore.addedGenres.filter(
          (e) => e !== genres
        );

        this.createImageStore.removedGenres.push(genres);
      } else if (event.target.classList.contains("Removed")) {
        event.target.classList.remove("Removed");
        this.createImageStore.removedGenres = this.createImageStore.removedGenres.filter(
          (e) => e !== genres
        );
      }
    },
  },
};
</script>

<style scoped>
.Active {
  background-color: #C5D9C8
}
.Removed {
  background-color: #A64F03;
}
button {
  width: 140px;
}

.TopBox {
  text-align: center;
}
.x {
  text-align: center;
}
.WholeBox {
  padding-top: 0px;
  padding-bottom: 50px;
}
.WorkBox {
  padding-top: 15px;
  background-color: white;
  color: black;
  width: 100%;
}
.col div {
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.Sök {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 25px;
}
.Sök-Button {
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  padding-left: 35%;
  padding-right: 45%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 15px 15px 15px 15px;
}
.y button {
  padding-left: 40px;
  padding-right: 40px;
}
</style>
