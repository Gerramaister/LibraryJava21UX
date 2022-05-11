<template>
    <h3>Kommentarer</h3>
    <OneReview
        username="Kalle"
        comments="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quas deleniti nihil vel aut praesentium dolore blanditiis illum voluptas consequuntur delectus excepturi atque harum, sint magnam repellat modi eaque nisi."
        imgSrc="https://picsum.photos/200"
    />
    <OneReview
        username="Bosse"
        comments="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illo?"
        imgSrc="https://picsum.photos/201"
    />
    <OneReview
        username="Nisse"
        comments="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a distinctio, molestias culpa eius tempora ea obcaecati, officia magnam rerum harum?"
        imgSrc="https://picsum.photos/202"
    />
</template>

<script>
import OneReview from "./OneReview.vue"

export default {
    components: {
        OneReview,
    },
}
</script>

<style scoped>
</style>