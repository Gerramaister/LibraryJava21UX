<template>
  <router-link to="/SearchView">
    <div class="col BigBox" @click="TagSearch(genreName)">
      <h4>{{ genreName }}</h4>
    </div>
  </router-link>
</template>

<script>
import { mapStores } from "pinia";
import { useCreateImageStore } from "../stores/CreateImage";
export default {
  props: ["image", "genreName"],

  data() {
    return {
      FunnyImage: this.image,
      myColor: "#00cc00",
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
.BigBox {
  margin-left: 2%;
  width: 95%;
  padding-top: 100px;
  padding-left: 15px;
  padding-bottom: 5px;
  color: white;
  border-radius: 15px 15px 15px 15px;
  text-align: left;
  background-image: v-bind(FunnyImage);
  padding: top;
}
</style>