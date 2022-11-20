<template>
    <div class="slider">
        <h2>{{ sliderTitle }}</h2>
        <swiper :slides-per-view="6" :slidesPerGroup="6" :loop="true" :space-between="10" :navigation="true"
            :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(card, index) in topRatedList">
                <CardComponent :title="card.title" :originalTitle="card.original_title" :lang="card.original_language"
                    :vote="card.vote_average" :img="card.poster_path" :tName="card.name" :overview="card.overview" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import { Navigation } from 'swiper';
import 'swiper/scss/navigation';
import axios from 'axios';
import { store } from '../store';
import CardComponent from './CardComponent.vue';

export default {
    name: 'SliderComponent',

    components: {
        CardComponent,
        Swiper,
        SwiperSlide,
    },

    props: ['sliderTitle'],

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation],
        };
    },


    data() {
        return {
            store,
            topRatedBaseUrl: 'https://api.themoviedb.org/3/movie/top_rated',
            topRatedList: [],
        }
    },


    methods: {
        getTopRated() {
            const topRatedCompleteUrl = this.topRatedBaseUrl + this.store.apiKey + '&language=it-IT&page=1';
            axios.get(topRatedCompleteUrl).then((response) => {
                this.topRatedList = { ...response.data.results };
            })
        }
    },


    mounted() {
        this.getTopRated()
    }

}
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    // display: flex;
    // align-items: center;
    // flex-wrap: nowrap;
    // overflow-x: scroll;
    padding: 84px 0;
    position: relative;


    h2 {
        position: absolute;
        top: 0;
        padding: 26px;
    }
}

.card-box {
    width: 100%;
}


.swiper {
    padding: 0 46px;

}
</style>