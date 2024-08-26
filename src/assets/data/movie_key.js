const BASE_API = "https://api.themoviedb.org/3"
const languageKO = "language=ko"
const POPULAR_API = `${BASE_API}/movie/popular?${languageKO}`
const TOP_RATED_API = `${BASE_API}/movie/top_rated?${languageKO}`
const NOW_PLAYING_API = `${BASE_API}/movie/now_playing?${languageKO}`
const SEARCH_API = `${BASE_API}/search/movie?query=dead&include_adult=false&${languageKO}&page=1`
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export { POPULAR_API, TOP_RATED_API, NOW_PLAYING_API, SEARCH_API, IMG_URL }