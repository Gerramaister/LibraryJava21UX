<template>
    <div class="quizcont container">
        <h5> {{ question }} </h5>
        <div class="answercont container">
            <div><img :src="answer1" @click="answer(1)" alt="Answer one"></div>
            <div><img :src="answer2" @click="answer(2)" alt="Answer two"></div>
            <div><img :src="answer3" @click="answer(3)" alt="Answer three"></div>
        </div>
        <div class="count"> {{ questionCount }}/5</div>
    </div>
</template>

<script>
export default {
    emits: ['eventanswer'],
    props: ["question", "answer1", "answer2", "answer3", "questionCount"],

    methods: {
        answer(number) {
            this.$emit('eventanswer', number)
        }
    }
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