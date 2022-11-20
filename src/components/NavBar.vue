<template>
    <div class="navbar" :class="{ navbackground: store.navCheck }">
        <div class="logo">
            <img src="/logo.png" alt="logo">
        </div>
        <div class="menu">

        </div>
        <div class="controls">
            <div class="prev" @click="preview()" v-if="store.films.length !== 0">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <input type="text" placeholder="Search" v-model="store.searchInput">
            <button @click="$emit('call')">Search</button>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'NavBar',

    data() {
        return {
            store,
        }
    },


    methods: {
        preview() {
            if (this.store.films.length !== 0) {
                this.store.films = [];
            }
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.navbar {
    width: calc(100% - 17px);
    padding: 4px 4%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.4s cubic-bezier(.215, .61, .355, 1);
}


.navbackground {
    background-color: $dark;
}


.logo {
    width: 126px;
    display: flex;
    align-items: center;

    img {
        width: 100%;
    }
}



.controls {
    position: absolute;
    right: 4%;
    padding: 4px;
    display: flex;
    align-items: center;


    .prev {
        display: inline-block;
        margin-right: 26px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: $ligth;
        color: $grey;
        line-height: 35px;
        text-align: center;
        font-size: 22px;
        cursor: pointer;
    }


    input {
        padding: 6px 16px;
        border: 1px solid $ligth;
        background-color: $dark;
        color: $ligth-grey;
        font-weight: 600;


        &:focus {
            outline: none;
        }
    }

    button {
        padding: 10px 24px;
        border: 0;
        border-radius: 6px;
        margin: 0 12px;
        background-color: red;
        color: $ligth;
        cursor: pointer;
        font-weight: 600;
        transition: all 1s cubic-bezier(.215, .61, .355, 1);
        ;


        &:hover {
            background-color: darkred;
        }
    }
}
</style>