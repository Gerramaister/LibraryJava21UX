<template>
        <div class="bookstore p-3 container" @click="this.$router.push('/MapView')">
            <h5>{{bookStoreName}}</h5>
            <div class="smallpcontainer">
            <small>{{distance}} meter</small>
            </div>
            <div>ÖPPET - Stänger 18:00</div>
        </div>
    <div class="p-3"></div>
</template>

<script>
 export default{
     props:["bookStoreName", "distance",]
 }
</script>

<style scoped>

body{
    font-family: 'Nunito Sans';
    font-style: normal;
}

.bookstore {
    background: #C5D9C8;
    border-radius: 8px;

}

.smallpcontainer {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5em;
}

h5{
    font-weight: 700;
    margin: 0;
}

small{
    font-weight: 10;
    font-size: medium;
}
</style>