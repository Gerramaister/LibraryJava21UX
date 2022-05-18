<template>
    <div class="quizcont container">
        <h5> {{ question }} </h5>
        <div class="answercont container">
            <div><img :src= "answer1"></div>
            <div><img :src= "answer2"></div>
            <div><img :src= "answer3"></div>
        </div>
        <div class="count"> {{ questioncount }}/5</div>
    </div>
</template>

<script>
export default{
    props:["question", "answer1", "answer2", "answer3", "questioncount"]
}
</script>

<style scoped>
.answercont {
    display: flex;
    flex-direction: row;
    background-color: #F2F2F2;
    justify-content: space-around;
}

img {
    padding-top: 3em;
    padding-bottom: 0.5em;
    width: 5em;
    height: 10em;
}

h5 {
    padding-top: 3em;
    padding-bottom: 1em;
    text-align: center;
}

.count {
    text-align: end;
    font-size: small;
    font-weight: 700;
    background-color: #F2F2F2;
    padding-bottom: 2em;
    padding-right: 1em;
    
}
</style>