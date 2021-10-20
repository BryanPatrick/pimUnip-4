<template>
    <div>
        <Carousel @next="next" @prev="prev">
            <CarouselSlider v-for="(slide, index) in slides" :key="slide" :index="index" 
            :visibleSlide="visibleSlide" :direction="direction">

                <img :src="slide" alt="" />

            </CarouselSlider>
        </Carousel>
    </div>
</template>

<script>
import Carousel from '../imgSlider/Carousel.vue'
import CarouselSlider from '../imgSlider/CarouselSlider.vue'

export default {
    name: 'SliderSuite',
    components: { Carousel, CarouselSlider },
    data() {
        return {
            slides: [
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/e9/ce/a0/hotel-presidente-4s-habitacion.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/e9/cf/18/hotel-presidente-4s-bano.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/01/d4/d2/hotel-presidente.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/73/99/e9/hotel-presidente-4s.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/01/d3/f9/hotel-presidente.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/01/d3/d9/hotel-presidente.jpg?w=1100&h=-1&s=1',
            ],
            visibleSlide: 0,
            direction: 'left',
        }
    },
    methods: {
        next() {
            if(this.visibleSlide >= this.slides.length - 1) {
                this.visibleSlide = 0;
            }else {
                this.visibleSlide++;
            }
            this.direction = 'left'
        },
        prev() {
            if(this.visibleSlide <= 0) {
                this.visibleSlide = this.slides.length -1;
            }else {
                this.visibleSlide--;
            }
            this.direction = 'right'
        }
    },
}
</script>

<style scoped>
</style>