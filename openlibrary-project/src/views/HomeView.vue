<template>
    <Carousel />

    <div class="px-3 pt-3">
        <h3 class="my-0">Read-y's Topplista</h3>
        <p>Populäraste böckerna just nu</p>
    </div>
    <div class="container">
        <div class="row row-cols-2">
            <div class="col p-2">
                <div class="border img-radius overflow-hidden"> <img class="w-100" src="https://loremflickr.com/640/360" alt=""> </div>
            </div>
            <div class="col p-2">
                <div class="border img-radius overflow-hidden"> <img class="w-100" src="https://www.placecage.com/640/360" alt=""> </div>
            </div>
            <div class="col p-2">
                <div class="border img-radius overflow-hidden"> <img class="w-100" src="https://placebear.com/640/360" alt=""> </div>
            </div>
            <div class="col p-2">
                <div class="border img-radius overflow-hidden"> <img class="w-100" src="https://www.stevensegallery.com/640/360" alt=""> </div>
            </div>
            
        </div>
    </div>
    <nav>
        <router-link to="/BookInfoView"> Bookinfoview </router-link> <br />
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
p {
    font-style: italic;
}
.img-radius{
    border-radius: 20%;
}
</style>