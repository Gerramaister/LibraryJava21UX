<template>
  <div class="container" ref="bookrow">
    <div class="row justify-content-center gx-2">
      <div class="col">
      <router-link to="/SearchView">
        <div class="x" @click="TagSearch(genreName)">
          <h4>{{ genreName }}</h4>
        </div>
      </router-link>
      </div>
      <div class="col">
        <router-link to="/SearchView">
        <div class="y" @click="TagSearch(genreName2)">
          <h4>{{ genreName2 }}</h4>
        </div>
      </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useCreateImageStore } from "../stores/CreateImage";
export default {
  props: ["image", "image2", "genreName", "genreName2"],
  data() {
    return {
      FirstImage: this.image,
      SecondImage: this.image2,
    };
  },

  computed: {
    ...mapStores(useCreateImageStore),
  },

  methods: {
    TagSearch(searchValue) {
      this.createImageStore.currentSearch = searchValue.toLowerCase();
      this.createImageStore.FindBookWithTagSearch();
    },
  },
};
</script>
<style scoped>
.col div {
  padding-top: 100px;
  padding-left: 15px;
  padding-bottom: 5px;
  color: white;
  width: 100%;
  border-radius: 15px 15px 15px 15px;
  text-align: left;
}
.x {
  background-image: v-bind(FirstImage);
}
.y {
  background-image: v-bind(SecondImage);
}
</style>