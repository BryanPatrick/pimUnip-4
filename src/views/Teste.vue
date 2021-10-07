<template>
    <div class="carouselFinal">
        <p>Teste</p>
        <Carousel>
            <CarouselSlider v-for="(slide, index) in slides" :key="slide" :index="index">
                <img :src="slide" alt="" />
            </CarouselSlider>
        </Carousel>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import CarouselSlider from '../components/CarouselSlider.vue'

export default {
    name: 'Teste',
    components: { Carousel, CarouselSlider },
    data() {
        return {
            slides: [
                '../assets/casal-1.jpg',
                '../assets/casal-2.jpg'
            ],
            visibleSlide: 0,
        }
    },
}
</script>

<style scoped>

</style>