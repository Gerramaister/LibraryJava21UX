<template>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <!-- 
                insert Carouselindicators here (should be same amout as Carouselitems) 
                viable props:
                    slideNumber=
                    slideTo= <should be one less then slideNumber>

                    ONE Carouselindicator must have 
                        active="active"
                        true="true"
            -->
            <Carouselindicator active="active" true="true" slideNumber="1" slideTo="0" />
            <Carouselindicator slideNumber="2" slideTo="1" />
            <Carouselindicator slideNumber="3" slideTo="2" />
            <Carouselindicator slideNumber="4" slideTo="3" />
        </div>
        <div class="carousel-inner">
            <!-- 
                <insert Carouselitem here> 
                viable props:
                    labelHead=
                    labelText=
                    imgSrc=
                    imgAlt=

                    ONE Carouselitem must have:
                        active="active"
            -->

            <Carouselitem class="item-padding" active="active" labelHead="Alla kategorier" imgSrc="../../src/assets/Images/HomeView/stackedBooks.png" imgAlt="stacked books"/>
            <Carouselitem class="item-padding" labelHead="Deckare" imgSrc="../../src/assets/Images/HomeView\61lF59FwTJL.jpg" imgAlt="second img"/>
            <Carouselitem class="item-padding" labelHead="Barn" imgSrc="../../src/assets/Images/HomeView/alfons.jpg" imgAlt="third img"/>
            <Carouselitem class="item-padding" labelHead="Romans" imgSrc="../../src/assets/Images/HomeView/eufori.jpg" imgAlt="forth img"/>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import Carouselindicator from "./Carouselindicator.vue"
import Carouselitem from "./Carouselitem.vue"
export default {
    components: { Carouselindicator, Carouselitem },
}
</script>

<style scoped>

.item-padding{
    padding: 2.5rem 0.5rem 1rem 0.5rem;
}

.carousel-indicators {
position: absolute;
bottom: -35px;

}
</style>