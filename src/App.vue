<template>
  <div class="container" @scroll="test()">
    <NavBar @call="search()" />
    <SearchResult v-if="store.films.length !== 0" />
    <HomeVideo v-if="store.films.length == 0" />
    <SliderComponent v-if="store.films.length == 0" v-for="(slider, index) in store.sliderList" :sliderTitle="slider" />
  </div>
</template>

<script>
import { store } from './store';
import axios from 'axios';
import NavBar from './components/NavBar.vue';
import SearchResult from './components/SearchResult.vue';
import HomeVideo from './components/HomeVideo.vue';
import SliderComponent from './components/SliderComponent.vue';

export default {
  components: {
    NavBar,
    SearchResult,
    HomeVideo,
    SliderComponent,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    search() {
      const apiCallUrl = this.store.baseApiUrl + 'search/multi' + this.store.apiKey + '&language=it-IT' + '&query=' + this.store.searchInput;
      axios.get(apiCallUrl).then((response) => {
        this.store.films = response.data.results;
        // console.log(this.store.films);
        this.store.searchInput = '';
      })
    },

    test() {
      const container = document.querySelector('.container');
      if (container.scrollTop > 1) {
        this.store.navCheck = true;
      } else {
        this.store.navCheck = false;
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}
</style>