<template>
<div class="full-review">
    <div class="alias">{{ alias }}</div>
    <div class="rating"> {{ rating }} </div>
    <div class="text-review">
        {{ textReview }}
    </div>
</div>
</template>

<script>
export default {
    props: ['alias', 'rating', 'textReview']
};
</script>

<style>
.full-review{
    border: solid black 1px;
}
</style>