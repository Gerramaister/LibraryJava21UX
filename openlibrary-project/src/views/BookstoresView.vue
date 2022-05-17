<template>
    <h1 class="bookstoresheader">Bokhandlar</h1>
    <div class="bookstorescont">
        <BookstoreInfo bookStoreName="Älvstrandens Bibliotek" distance="100" stock="5" />
        <BookstoreInfo bookStoreName="Akademibokhandeln" distance="600" stock="3" />
        <BookstoreInfo bookStoreName="Stadsbiblioteket" distance="2000" stock="2" />
        <BookstoreInfo bookStoreName="Bokhandeln" distance="1100" stock="10" />
    </div>
</template>

<script>
import BookstoreInfo from "../components/BookstoreInfo.vue";
export default {
    components: {
        BookstoreInfo
    }
}
</script>

<style>
.bookstoresheader {
    text-align: center;
    font-weight: 600;
    padding-top: 0.4em;
    padding-bottom: 1.2em;
}


</style>