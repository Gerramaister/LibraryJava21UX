<template>
    <div class="carousel-item" :class="active">
        <img :src="imgSrc" class="d-block w-100 edge-rounded" :alt="imgAlt" />
        <div class="carousel-caption d-md-block p-0">
            <h5 class="head-link" @click="this.$router.push('/CategoriesView')">{{ labelHead }}</h5>
            <!-- <p>{{ labelText }}</p> -->
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {}
    },
    props: ["labelHead", "labelText", "imgSrc", "imgAlt", "active"],
}
</script>

<style scoped>
.head-link {
    text-align: start;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 120%;
    color: #000000;
}

.edge-rounded {
    border-radius: 14px;
    width: 342px;
    height: 207px;
}

.carousel-caption {
    left: 6%;
    right: 6%;
}
</style>
