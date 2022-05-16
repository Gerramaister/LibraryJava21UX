<template>
    <div class="quizcont">
        <div class="quizheader h2 text-center">Vilken quizutmaning är du redo för idag?</div>
        <div class="buttoncont">
            <button type="button" class="btn btn-primary btn-square-md">Deckare</button>
            <button type="button" class="btn btn-primary btn-square-md">Feelgood</button>
            <button type="button" class="btn btn-primary btn-square-md">Biografer</button>
            <button type="button" class="btn btn-primary btn-square-md">Barn</button>
            <button type="button" class="btn btn-primary btn-square-md">Skräck</button>
            <button type="button" class="btn btn-primary btn-square-md">Historia</button>
            <button type="button" class="btn btn-primary btn-square-md">Roman</button>
            <button type="button" class="btn btn-primary btn-square-md">Fantasy</button>
            <button type="button" class="btn btn-primary btn-square-md">SCI-FI</button>
        </div>
        <div class="starttext text-center">Klicka på en kategori ovan för att starta quizet!</div>
    </div>
</template>

<script>
</script>

<style scoped>
button {
    width: 6em;
    height: 6em;
    background: #5E778C;
    border-radius: 20px;
}

.buttoncont {
    flex-wrap: wrap;
    display: flex;
    gap: 1em;
    justify-content: center;
    padding-top: 1em;
}

.quizheader {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    padding-top: 1em;
}

.starttext {
    padding-top: 1.5em;
}
</style>