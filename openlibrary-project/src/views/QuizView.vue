<template>
    <div class="quizcont">
        <div class="category container"></div>
        <div class="categoryText">Fantasy</div>
        <Quizqanda :question="question" 
            answer1="https://m.media-amazon.com/images/I/71-++hbbERL._AC_SY679_.jpg"
            answer2="https://kbimages1-a.akamaihd.net/c0dc20a6-33e5-4436-bf23-05d49b0dfc14/1200/1200/False/fire-and-blood-the-inspiration-for-hbo-s-house-of-the-dragon-a-song-of-ice-and-fire-1.jpg"
            answer3="https://media.bonnierforlagen.se/bokbilder/tif/9789143500875.jpg?timestamp=20160308125307"
            :questioncount="questioncount" />

        <input type="button" class="nextq" value="Nästa" @click="answer">
    </div>
</template>

<script>
import Quizqanda from "../components/Quizqanda.vue";
export default {
    data() {
        return {
            questioncount: 1,
            question: "I vilken bok hittar du karaktären Hercule Barfuss?",
            questions: [{ q: " " },
            { q: "Vilken bok har J.K. Rowling skrivit?" },
            { q: "Vilken bok har adapterats till en tv-serie som blev en stor succé?" },
            { q: "Vilken bok har Christopher paolini skrivit?" },
            { q: "Hur gammal var Christoper paolini när han skrev sin första bok?" }],
            currentq: 0,
        }
    },
    methods: {
        answer() {
            this.currentq += 1
            this.question = this.questions[this.currentq].q
            this.questioncount++;
        }
    },
    components: {
        Quizqanda
    }
}
</script>

<style scoped>
.nextq {
    margin-top: 1em;
    margin-left: 1em;
}

.category {
    padding-top: 4em;
    padding-left: 1em;
}

.categoryText {
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 0.9375em;
    display: inline;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
}
</style>