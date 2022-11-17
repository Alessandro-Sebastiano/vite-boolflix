<template>
    <div class="card-box">
        <div class="overlay"></div>
        <div class=" card-image">
            <img :src="!createImgPath.includes('undefined') && !createImgPath.includes('null') ? createImgPath : '/logo.png'"
                :alt="title">
        </div>
        <div class="card-info">
            <h3>{{ (title) ? title : tName }}</h3>
            <h5 v-if="originalTitle !== title">{{ originalTitle }}</h5>
            <span v-if="formatVote"><i class="fa-solid fa-star" v-for="() in formatVote"></i></span>
            <span v-else>No vote</span>
            <span>{{ lang }}</span>
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
    aspect-ratio: 9 / 16;
    margin: 30px 4px;
    border-radius: 22px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

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
    transition: all 0.5s cubic-bezier(.215, .61, .355, 1);
}


.card-image {
    width: 100%;
    height: 100%;


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
    bottom: 12px;
    padding: 4px 18px;


    h3,
    h5 {
        margin-bottom: 4px;
    }


    span {
        display: inline-block;
        margin-top: 28px;
        margin-right: 12px;
    }
}
</style>