<template>
  <h1>Mina Listor</h1>
  <BookList title="Mina Favoriter" genre="sci-fi"/>
  <BookList title="Sparade böcker"/>
  <BookList title="Svenska Kändisar"/>
</template>

<script>
import BookList from "../components/BookList.vue";

export default {
components: {BookList},
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