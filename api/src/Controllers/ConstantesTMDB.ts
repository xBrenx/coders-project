const posterPath = (img: string) => `https://image.tmdb.org/t/p/w500${img}`
const backdropPath = (img: string) => `https://image.tmdb.org/t/p/original${img}`
const youtubePAth = (id: string) => `https://ww-youtube.com/embed/${id}?controls=0`
const baseUrl = 'https://api.themoviedb.org/3/'
const baseUrlMovie = 'https://api.themoviedb.org/3/movie/'

const tmdb = {
    posterPath,
    backdropPath,
    youtubePAth,
    baseUrl,
    baseUrlMovie
}

export default tmdb;
