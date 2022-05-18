<template>
    <h1>Lämna betyg</h1>
    <RatingSlide start="Spännande" end="Tråkig" />
    <RatingSlide start="Upplyftande" end="Deppig" />
    <RatingSlide start="Rolig" end="Allvarlig" />
    <RatingSlide start="Lättläst" end="Svårläst" />

    <div class="text-input">
        <input class="text-item more-padding" v-model="username" placeholder="Namn" />
        <textarea class="text-item" v-model="comments" placeholder="Lämna kommentar..." cols="30" rows="5"></textarea>
        <button class="text-item button p-2 btn-primary" @click="postReview">SPARA</button>
    </div>
</template>

<script>
import { mapStores } from "pinia"
import { useReviewsStore } from "../stores/reviews.js"
import RatingSlide from "../components/RatingSlide.vue"

export default {
    data() {
        return {
            username: "",
            comments: "",
        }
    },
    computed: {
        ...mapStores(useReviewsStore)
    },
    methods: {
        postReview() {
            this.reviewsStore.addReview(this.username, this.comments)
            this.$router.push('/BookInfoView')
            console.log(this.reviewsStore.reviews)
        }
    },
    components: {
        RatingSlide,
    },
}
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
.button{
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    border-radius: 14px;
}
</style>

