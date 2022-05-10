<template>
    <Carousel />
    
    <nav>
        <router-link to="/RatingView"> Rating </router-link> <br />
        <router-link to="/MyLists"> MyLists </router-link> <br />
        <router-link to="/SearchView"> SearchView </router-link>
    </nav>
</template>

<script>
import Carousel from "../components/Carousel/Carousel.vue"
export default {
    components: { Carousel },
}
</script>

<style scoped>
h1 {
    text-align: center;
}

</style>