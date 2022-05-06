<template>
    <button
        type="button"
        data-bs-target="#carousel"
        :data-bs-slide-to= "slideTo"
        :class= "active"
        :aria-current= "true"
        :aria-label= "slideNumber"
    ></button>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ["slideNumber", "active", "true", "slideTo"],
}
</script>