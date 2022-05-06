<template>
    <div class= "carousel-item" :class= "active">
        <img :src= "imgSrc" class="d-block w-100" :alt= "imgAlt" />
        <div class="carousel-caption d-none d-md-block">
            <h5>{{ labelHead }}</h5>
            <p>{{ labelText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carouselItem: 'carousel-item',
            // labelText: '',
            // imgSrc: '',
            // imgAlt: '',
            // active: ''
        }
    },
    props: ["labelHead", "labelText", "imgSrc", "imgAlt", "active"],
}
</script>
