<template>
  <h1>Mina Listor</h1>
  <BookListVue title="Sparade böcker" genre="love"/>
  <BookListVue title="Svenska Kändisar" genre="celebrity"/>
  <BookListVue title="Mina Favoriter" genre="sci-fi"/>
</template>

<script>
import BookListVue from "../components/BookListVue.vue";


export default {
components: {BookListVue},
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: normal;
}

</style>