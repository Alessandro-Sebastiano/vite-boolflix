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
    }

}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    border: 1px solid red;
    padding: 4px 4%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
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

    input {
        padding: 4px 8px;
    }

    button {
        padding: 8px 20px;
    }
}
</style>