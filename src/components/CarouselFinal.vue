<template>
    <div class="carouselFinal">
        <carousel>
            <carousel-slider v-for="(slide, index) in slides" :key="slide" :index="index"></carousel-slider>
            
        </carousel>
    </div>
</template>

<script>
import Carousel from './Carousel.vue'
import CarouselSlider from './CarouselSlider.vue'
export default {
  components: { Carousel, CarouselSlider },
  data() {
    return {
        slides: [
            <img src="./assets/casal-1.jpg" alt="" />,
            <img src="./assets/casal-2.jpg" alt="" />,
            <img src="./assets/casal-3.jpg" alt="" />,
            <img src="./assets/casal-4.jpg" alt="" />,
            <img src="./assets/casal-5.jpg" alt="" />,
            <img src="./assets/casal-6.jpg" alt="" />
        ],
        visibleSlide: 0,
    }
  },
    
}
</script>

<sty
Carouselle scoped>

</style>