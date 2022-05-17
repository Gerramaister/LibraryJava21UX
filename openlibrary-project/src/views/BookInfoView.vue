<template>
    <BookInfo />
    <button class="text-item button p-2 btn-primary" @click="this.$router.push('/RatingView')">Betygsätt</button>
    <div>insert diamant here</div>
    <Reviews />
</template>

<script>
import Reviews from '../components/Reviews/Reviews.vue'
import BookInfo from '../components/BookInfo.vue'
export default {
components: {
    Reviews,
    BookInfo,
}
}
</script>

<style scoped>
.text-item {
    margin: 0em;
}
.button {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    border-radius: 14px;
}
</style>