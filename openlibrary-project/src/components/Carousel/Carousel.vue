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

            <Carouselitem active="active" labelHead="Test1" labelText="text1" imgSrc="http://via.placeholder.com/640x360" imgAlt="first img"/>
            <Carouselitem labelHead="Test2" labelText="text2" imgSrc="https://www.fillmurray.com/640/360" imgAlt="second img"/>
            <Carouselitem labelHead="Test3" labelText="text3" imgSrc="https://placekitten.com/640/360" imgAlt="third img"/>
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