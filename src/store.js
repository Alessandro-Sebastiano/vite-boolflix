import { reactive } from "vue";

export const store = reactive({
    apiKey: '?api_key=87256d80709c5826ce4f700480cce209',
    baseApiUrl: 'https://api.themoviedb.org/3/',
    imgUrl: 'https://image.tmdb.org/t/p/w342',
    flag: 'https://countryflagsapi.com/png/',
    films: [],
    searchInput: '',
    sliderList: ['Top rated', 'Film', 'TV - Series'],
    navCheck: false,
})