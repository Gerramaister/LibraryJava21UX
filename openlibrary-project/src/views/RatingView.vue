<template>
    <h1>Lämna betyg</h1>
    <RatingSlide start="Spännande" end="Tråkig" />
    <RatingSlide start="Upplyftande" end="Deppig" />
    <RatingSlide start="Rolig" end="Allvarlig" />
    <RatingSlide start="Lättläst" end="Svårläst" />
    <div class="text-input">
        <input class="text-item more-padding" v-model="name" placeholder="Namn" />
        <textarea class="text-item" v-model="comment" placeholder="Lämna kommentar..." cols="30" rows="5"></textarea>
        <button class="text-item" >Spara</button>
    </div>
</template>

<script>
import RatingSlide from "../components/RatingSlide.vue"

export default {
    data() {
        return {
            name: "",
            comment: "",
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
</style>

