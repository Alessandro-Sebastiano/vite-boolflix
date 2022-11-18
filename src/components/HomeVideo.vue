<template>
    <div class="main-video-box">
        <iframe v-if="getVideoKey" width="560" height="315" :src="srcBaseUrl + getVideoKey + urlOptions"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';


export default {
    name: 'HomeVideo',

    data() {
        return {
            store,
            popularBaseUrl: 'https://api.themoviedb.org/3/movie/popular',
            randomPopular: '',
            videoBaseUrl: 'https://api.themoviedb.org/3/movie/',
            videoKey: '',
            srcBaseUrl: 'https://www.youtube.com/embed/',
            urlOptions: '?controls=0&loop=0&autoplay=1',
        }
    },


    beforeMount() {
        const popularCompleteUrl = this.popularBaseUrl + this.store.apiKey + '&language=it-IT&page=1';
        axios.get(popularCompleteUrl).then((response) => {
            // console.log(response.data.results[0].id)
            this.randomPopular = response.data.results[0].id;
        })
    },



    computed: {
        getVideoKey() {
            if (this.randomPopular !== '') {
                const videoCompleteUrl = this.videoBaseUrl + this.randomPopular + '/videos' + this.store.apiKey + '&language=it-IT';
                axios.get(videoCompleteUrl).then((response) => {
                    this.videoKey = response.data.results[0].key;
                })
            }
            return this.videoKey;
        }
    },


}
</script>

<style lang="scss" scoped>
.main-video-box {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;



    iframe {
        width: 100%;
        height: 100%;
        display: block;
        scale: 1.4;
    }
}
</style>