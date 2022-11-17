<template>
    <div class="navbar">
        <div class="logo">
            <img src="/logo.png" alt="logo">
        </div>
        <div class="menu">

        </div>
        <div class="controls">
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

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.navbar {
    width: 100%;
    padding: 4px 4%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: $background;
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