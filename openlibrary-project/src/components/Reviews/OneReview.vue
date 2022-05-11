<template>
    <div class="oneReview">
        <img class="profileImg p-2" :src= "imgSrc" alt="placeholder img" />
        <div class="text container">
            <p class="username mb-1 mt-1">@{{ username }}</p>
            <p class="comment">
                {{ comments }}
            </p>
        </div>
    </div>
    <div class="p-2"></div>
</template>

<script>
export default {
    props: ["username", "comments", "imgSrc"],
}
</script>

<style scoped>
.username {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
}

.comment {

    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
}

.oneReview {
    display: flex;
    background-color: #f2f2f2;
    border-radius: 12px;
}

.profileImg {
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
}
</style>