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
            <p>{{ overview }}</p>
            <div class="align">
                <span v-if="formatVote"><i class="fa-solid fa-star" v-for="() in formatVote"></i></span>
                <span v-else>No vote</span>
                <span class="flag"><img :src="flagUrl" alt=""></span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'CardComponent',

    props: ['title', 'originalTitle', 'lang', 'vote', 'img', 'tName', 'overview'],

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

        flagUrl() {
            if (this.lang !== 'en') {
                return this.store.flag + this.lang;
            } else {
                return this.store.flag + 'us';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

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


    p {
        max-height: 88px;
        overflow-y: auto;
        padding-right: 24px;


        &::-webkit-scrollbar {
            background-color: transparent;
            width: 3px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: $ligth;
        }
    }


    span {
        display: inline-block;
        margin-top: 28px;
        margin-right: 16px;
    }
}


.align {
    display: flex;
    align-items: center;
}


.flag {
    width: 35px;
    height: 20px;

    img {
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>