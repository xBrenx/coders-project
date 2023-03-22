"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posterPath = (img) => `https://image.tmdb.org/t/p/w500${img}`;
const backdropPath = (img) => `https://image.tmdb.org/t/p/original${img}`;
const youtubePAth = (id) => `https://ww-youtube.com/embed/${id}?controls=0`;
const baseUrl = 'https://api.themoviedb.org/3/';
const baseUrlMovie = 'https://api.themoviedb.org/3/movie/';
const tmdb = {
    posterPath,
    backdropPath,
    youtubePAth,
    baseUrl,
    baseUrlMovie
};
exports.default = tmdb;
//# sourceMappingURL=ConstantesTMDB.js.map