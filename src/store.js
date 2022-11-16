import { reactive } from "vue";

export const store = reactive({
    apiKey: '?api_key=87256d80709c5826ce4f700480cce209',
    baseApiUrl: 'https://api.themoviedb.org/3/',
    films: [],
    searchInput: '',
})