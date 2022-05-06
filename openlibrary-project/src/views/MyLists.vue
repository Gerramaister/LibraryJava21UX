<template>
  <h1>Mina Listor</h1>
  <BookListVue title="Mina Favoriter" genre="sci-fi"/>
  <BookListVue title="Sparade böcker" genre="love"/>
  <BookListVue title="Svenska Kändisar" genre="celebrity"/>
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
.text-input {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 1rem;
  justify-content: space-around;
  gap: 1em;
}
.text-item {
  margin: 0em;
}
</style>