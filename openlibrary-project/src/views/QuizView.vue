<template>
    <div class="quizcont">
        <div class="category container"></div>
        <div class="categoryText">Fantasy</div>
        <Quizqanda :question="question" :answer1="answer1" :answer2="answer2" :answer3="answer3"
            :questioncount="questioncount" :answercount="answercount" />
        <input type="button" class="nextq" value="Nästa" @click="forward">
    </div>
</template>

<script>
import Quizqanda from "../components/Quizqanda.vue";
export default {
    data() {
        return {
            answercount: 1,
            questioncount: 1,
            currentq: 0,
            currenta: 0,
            question: "I vilken bok hittar du karaktären Hercule Barfuss?",
            answer1: "https://upload.wikimedia.org/wikipedia/en/8/84/Otori_Grass.jpg",
            answer2: "https://external-preview.redd.it/R6hZMfoXu4kGvzRnfKVQRXDOp2BAdVriZVp3FAqUrtE.jpg?width=640&crop=smart&auto=webp&s=76648ce1a8d24c8a61acc434be5644f1a681366e",
            answer3: "https://media.bonnierforlagen.se/bokbilder/tif/9789143500875.jpg?timestamp=20160308125307",
            questions: [{ q: " " },
            { q: "Vilken bok har J.K. Rowling skrivit?" },
            { q: "Vilken bok har adapterats till en tv-serie som blev en stor succé?" },
            { q: "Vilken bok om en drake och dennes ryttare var författaren 15 år när han skrev boken?" },
            { q: "I vilken bok hittar du protagonisten Kvothe?" }],

            answersone: [{ a: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SY679_.jpg" },
            { a: "https://kbimages1-a.akamaihd.net/c0dc20a6-33e5-4436-bf23-05d49b0dfc14/1200/1200/False/fire-and-blood-the-inspiration-for-hbo-s-house-of-the-dragon-a-song-of-ice-and-fire-1.jpg" },
            { a: "https://i.pinimg.com/originals/71/05/c1/7105c1a8165ae9040fa3e1d795dfbc40.jpg" },
            { a: "https://www.coverdungeon.com/wp-content/uploads/2022/01/3d-bookcoverdesigner-books-bookcover-bookdesign-coverdesigner-coverdungeon-coverdungeonrabbit-book-cover-design-fantasy-dark-urban-epic-designer.jpg" },
            { a: "https://images-na.ssl-images-amazon.com/images/I/71jJcPTGd3L.jpg" }],

            answerstwo: [{ a: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SY679_.jpg" },
            { a: "https://images-platform.99static.com//PiHWJxAcOnC7gw197YEXKtyxDXQ=/fit-in/500x500/99designs-contests-attachments/39/39493/attachment_39493946" },
            { a: "https://external-preview.redd.it/x7uwXmql-Z9MFYuolcaDyJlni-NH5wPtUVniec6A9JY.jpg?width=640&crop=smart&auto=webp&s=8026a284ea906a4bbd4fe61340cc0b5a3cb83dcd" },
            { a: "https://www.mythosink.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-20-at-6.00.42-PM.png" },
            { a: "https://kbimages1-a.akamaihd.net/55d6b1db-0dd7-4120-8c65-f3fb5193be37/353/569/90/False/introducing-the-witcher.jpg" }],

            answersthree: [{ a: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SY679_.jpg" },
            { a: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SY679_.jpg" },
            { a: "https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1601524801845-8POC3A8VYN9QC09KGFRG/Green-Angels.jpg" },
            { a: "https://sequoyahscribe.com/wp-content/uploads/2016/02/Eragon-Alfred-A.-Knopf.jpg" },
            { a: "https://i.pinimg.com/originals/7d/a0/8e/7da08e69a6af9cffbbf59f32f80163e2.jpg" }]
        }
    },
    methods: {
        forward() {
            this.currentq += 1
            this.currenta += 1
            this.question = this.questions[this.currentq].q
            this.answer1 = this.answersone[this.currenta].a
            this.answer2 = this.answerstwo[this.currenta].a
            this.answer3 = this.answersthree[this.currenta].a
            this.questioncount++
            this.answercount++;
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
    margin-left: 17.5em;
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