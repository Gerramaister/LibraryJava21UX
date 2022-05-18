<template>
    <h3>Kommentarer</h3>

    <OneReview
        v-for="review of reviewsStore.reviews"
        :username="review.username"
        :comments="review.comments"
        :imgSrc="review.imgSrc"
    />
</template>

<script>
import { mapStores } from "pinia"
import { useReviewsStore } from "../../stores/reviews.js"
import OneReview from "./OneReview.vue"

export default {
    computed: {
        ...mapStores(useReviewsStore),
    },
    components: {
        OneReview,
    },
}
</script>

<style scoped>
</style>