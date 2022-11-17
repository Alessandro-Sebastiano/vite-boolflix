<template>
  <div class="container">
    <NavBar @call="search()" />
    <SearchResult v-if="store.films.length !== 0" />
  </div>
</template>

<script>
import { store } from './store';
import axios from 'axios';
import NavBar from './components/NavBar.vue'
import SearchResult from './components/SearchResult.vue';

export default {
  components: {
    NavBar,
    SearchResult,
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
        this.store.films = { ...response.data.results };
        console.log(this.store.films);
        this.store.searchInput = '';
      })
    }
  },

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>