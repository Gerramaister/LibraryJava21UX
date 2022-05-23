<template>
    <div class="quizcont">
        <div class="category container"></div>
        <div class="categoryText">Fantasy</div>
        <Quizqanda :question="questions[currentq].question" :answer1="questions[currentq].answers[0]"
            :answer2="questions[currentq].answers[1]" :answer3="questions[currentq].answers[2]"
            :questionCount="questionCount" @eventanswer="handleAnswer" />
        <div v-show = "visiblecorrect" class="correctanswer container">
            <svg width="198" height="189" viewBox="0 0 198 189" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="hidecorrect()">
                <path
                    d="M94.0734 4.16263C95.6241 -0.609921 102.376 -0.609904 103.927 4.16265L123.656 64.8836C124.35 67.018 126.339 68.463 128.583 68.463H192.429C197.447 68.463 199.533 74.8845 195.473 77.8341L143.821 115.362C142.005 116.681 141.246 119.019 141.939 121.153L161.669 181.874C163.219 186.647 157.757 190.616 153.697 187.666L102.045 150.138C100.229 148.819 97.7708 148.819 95.9552 150.138L44.3028 187.666C40.243 190.616 34.7806 186.647 36.3313 181.874L56.0608 121.153C56.7543 119.019 55.9946 116.681 54.179 115.362L2.52661 77.8341C-1.53317 74.8845 0.553291 68.463 5.57145 68.463H69.4173C71.6615 68.463 73.6504 67.018 74.3439 64.8836L94.0734 4.16263Z"
                    fill="#C5D9C8" />
            </svg>
        </div>
        <div v-show = "visiblewrong" class="wronganswer container">
            <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="hidewrong()">
                <path
                    d="M127.631 5.85711C112.013 21.4868 96.3666 37.1192 80.7642 52.7516C65.1345 37.1274 49.5048 21.495 33.8697 5.85711C15.7845 -12.2198 -12.2373 15.8157 5.83961 33.8927C21.4638 49.5087 37.1017 65.1493 52.7068 80.7598C37.0908 96.3841 21.4556 112.022 5.83961 127.654C-12.2373 145.726 15.7982 173.753 33.8697 155.687C49.4939 140.055 65.1236 124.425 80.7642 108.793C96.3939 124.425 112.013 140.049 127.631 155.687C145.711 173.756 173.736 145.726 155.672 127.657C140.04 112.025 124.41 96.4005 108.778 80.7626C124.413 65.1329 140.043 49.5005 155.672 33.868C173.736 15.7966 145.711 -12.239 127.631 5.83797"
                    fill="#A64F03" />
            </svg>
        </div>
        <div v-show = "visiblescore" class="showscore">{{ score }}/5 Rätt, Bra jobbat!</div>
    </div>
</template>

<script>
import Quizqanda from "../components/Quizqanda.vue";
export default {
    data() {
        return {
            visiblecorrect: false,
            visiblewrong: false,
            visiblescore: false,
            score: 0,
            questionCount: 1,
            currentq: 0,
            correctAnswers: [3, 3, 1, 2, 1],
            questions: [
                {
                    question: "I vilken bok hittar du karaktären Hercule Barfuss?",
                    answers: [
                        "https://upload.wikimedia.org/wikipedia/en/8/84/Otori_Grass.jpg",
                        "https://external-preview.redd.it/R6hZMfoXu4kGvzRnfKVQRXDOp2BAdVriZVp3FAqUrtE.jpg?width=640&crop=smart&auto=webp&s=76648ce1a8d24c8a61acc434be5644f1a681366e",
                        "https://media.bonnierforlagen.se/bokbilder/tif/9789143500875.jpg?timestamp=20160308125307"
                    ]
                },
                {
                    question: "Vilken bok har J.K. Rowling skrivit?",
                    answers: [
                        "https://images-platform.99static.com//PiHWJxAcOnC7gw197YEXKtyxDXQ=/fit-in/500x500/99designs-contests-attachments/39/39493/attachment_39493946",
                        "https://kbimages1-a.akamaihd.net/c0dc20a6-33e5-4436-bf23-05d49b0dfc14/1200/1200/False/fire-and-blood-the-inspiration-for-hbo-s-house-of-the-dragon-a-song-of-ice-and-fire-1.jpg",
                        "https://m.media-amazon.com/images/I/71-++hbbERL._AC_SY679_.jpg"
                    ]
                },
                {
                    question: "Vilken bok har adapterats till en tv-serie som blev en stor succé?",
                    answers: [
                        "https://i.pinimg.com/originals/71/05/c1/7105c1a8165ae9040fa3e1d795dfbc40.jpg",
                        "https://images-platform.99static.com//PiHWJxAcOnC7gw197YEXKtyxDXQ=/fit-in/500x500/99designs-contests-attachments/39/39493/attachment_39493946",
                        "https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1601524801845-8POC3A8VYN9QC09KGFRG/Green-Angels.jpg"
                    ]
                },
                {
                    question: "Vilken bok om en drake och dennes ryttare var författaren 15 år när han skrev?",
                    answers: [
                        "https://www.coverdungeon.com/wp-content/uploads/2022/01/3d-bookcoverdesigner-books-bookcover-bookdesign-coverdesigner-coverdungeon-coverdungeonrabbit-book-cover-design-fantasy-dark-urban-epic-designer.jpg",
                        "https://sequoyahscribe.com/wp-content/uploads/2016/02/Eragon-Alfred-A.-Knopf.jpg",
                        "https://kbimages1-a.akamaihd.net/55d6b1db-0dd7-4120-8c65-f3fb5193be37/353/569/90/False/introducing-the-witcher.jpg"
                    ]
                },
                {
                    question: "I vilken bok hittar du protagonisten Kvothe?",
                    answers: [
                        "https://images-na.ssl-images-amazon.com/images/I/71jJcPTGd3L.jpg",
                        "https://www.mythosink.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-20-at-6.00.42-PM.png",
                        "https://external-preview.redd.it/x7uwXmql-Z9MFYuolcaDyJlni-NH5wPtUVniec6A9JY.jpg?width=640&crop=smart&auto=webp&s=8026a284ea906a4bbd4fe61340cc0b5a3cb83dcd"
                    ]
                },

            ]
        }
    },
    methods: {
        forward() {
            this.currentq++
            this.questionCount++
            this.question = this.questions[this.currentq].question
            this.answer1 = this.questions[this.currentq].answers[0]
            this.answer2 = this.questions[this.currentq].answers[1]
            this.answer3 = this.questions[this.currentq].answers[2]

        },
        showwrong() {
            this.visiblewrong = true
        },
        hidewrong() {
            this.visiblewrong = false
        },
        showcorrect() {
            this.visiblecorrect = true
        },
        hidecorrect() {
            this.visiblecorrect = false
        },
        showScore() {
            this.visiblescore = true
        },
        hidescore() {
            this.visiblescore = false
        },

        handleAnswer(number) {
            if (this.correctAnswers[this.currentq] === number) {
                this.showcorrect()
                this.score++
            }
            else {
                this.showwrong()
            }

            if (this.questionCount === this.questions.length) {
                this.showScore() 
            }
            else  {
                this.forward()
            }
        },
    },
    components: {
        Quizqanda
    },
}
</script>

<style scoped>
.showscore {
    margin-top: 1em;
    font-weight: 600;
    text-align: center;
    font-size: large;
}

.correcttext {
    text-align: center;
    color: #FFFFFF;
    font-size: 1.2em;
}

.wrongtext {
    text-align: center;
    left: 3.9em;
    top: 3.5em;
    color: #FFFFFF;
    font-size: 1.2em;
}

.correctanswer {
    text-align: center;
    position: absolute;
    left: 4.9em;
    top: 17.6em;
    
}

.wronganswer {
    position: absolute;
    text-align: center;
    left: 6em;
    top: 19em;
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