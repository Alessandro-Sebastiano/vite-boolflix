<template>
    <div class="card-box">
        <div class="overlay"></div>
        <div class=" card-image">
            <img :src="createImgPath" :alt="title">
        </div>
        <div class="card-info">
            <h3>{{ (title) ? title : tName }}</h3>
            <h5>{{ originalTitle }}</h5>
            <span>{{ lang }}</span>
            <span v-if="formatVote"><i class="fa-solid fa-star" v-for="() in formatVote"></i></span>
            <span v-else>No vote</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'CardComponent',

    props: ['title', 'originalTitle', 'lang', 'vote', 'img', 'tName'],

    data() {
        return {
            store,
        }
    },

    computed: {
        createImgPath() {
            let completeUrl = '';
            return completeUrl = store.imgUrl + this.img;
        },
        formatVote() {
            let numOfStars = '';
            return numOfStars = Math.floor(this.vote / 2);
        },
    }
}
</script>

<style lang="scss" scoped>
.card-box {
    width: calc((100% / 6) - 8px);
    margin: 30px 4px;
    border: 1px solid red;
    cursor: pointer;
    position: relative;

    &:hover .card-info {
        visibility: visible;
    }

    &:hover .overlay {
        opacity: 0.8;
    }
}


.overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    transition: all 0.4s ease;
}


.card-image {
    width: 100%;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        display: block;
    }
}


.card-info {
    visibility: hidden;
    position: absolute;
    bottom: 10px;
    padding: 4px 12px;


    span {
        display: block;
    }
}
</style>