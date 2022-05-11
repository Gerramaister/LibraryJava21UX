<template>
    <h3>Kommentarer</h3>
    <OneReview username="Kalle" comments="En bra kommentar" imgSrc="https://picsum.photos/200"/>
    <OneReview username="Bosse" comments="En bra kommentar skapad av Bosse" imgSrc="https://picsum.photos/201"/>
    <OneReview username="Nisse" comments="En dålig kommentar" imgSrc="https://picsum.photos/202"/>
</template>

<script>
import OneReview from "./OneReview.vue"

export default {
    components: {
        OneReview,
    }
}
</script>

<style scoped>

</style>