<template>
    <div class="carouselFinal">
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
    name: 'SliderStandard',
    components: { Carousel, CarouselSlider },
    data() {
        return {
            slides: [
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/56/d0/5e/hotel-presidente.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/56/d0/51/hotel-presidente.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/56/d0/6a/hotel-presidente.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ed/8c/hotel-presidente-4s.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ed/86/hotel-presidente-4s.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/34/ae/hotel-presidente-4s.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ed/6a/hotel-presidente-4s.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8e/da/06/hotel-presidente.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8e/d9/e9/hotel-presidente.jpg?w=1200&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8e/d9/e0/hotel-presidente.jpg?w=1100&h=-1&s=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/8e/d9/c2/hotel-presidente.jpg?w=1200&h=-1&s=1'
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