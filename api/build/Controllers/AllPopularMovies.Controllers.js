"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
//keys importantes----------------------------------
const KEY = process.env.KEY;
const IMAGE_PATH = process.env.IMAGE_PATH;
//FIN DE INTERFACES----------------------------------
function allPopularMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        //inGenre recibe un array con los id de los generos, y devuelve un array de generos.
        const inGenre = (genresIds) => __awaiter(this, void 0, void 0, function* () {
            const apiGenres = yield axios_1.default.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`);
            const genres = genresIds.map((g) => {
                const genre = apiGenres.data.genres.find((e) => e.id === g);
                return genre.name;
            });
            return genres;
        });
        //data será un arreglo de objetos
        const data = [];
        const inData = (results) => __awaiter(this, void 0, void 0, function* () {
            for (let m of results) {
                const genres = yield inGenre(m.genre_ids);
                data.push({
                    id: m.id,
                    adult: m.adult,
                    title: m.original_title,
                    resume: m.overview,
                    poster: IMAGE_PATH + m.poster_path,
                    backdrop: IMAGE_PATH + m.backdrop_path,
                    genres: genres,
                });
            }
        });
        //Tomamos los datos y filtramos la información usan inData
        yield axios_1.default
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=1`)
            .then((res) => res.data.results)
            .then((results) => inData(results))
            .catch((error) => console.log(error));
        return data;
    });
}
exports.default = allPopularMovies;
//# sourceMappingURL=AllPopularMovies.Controllers.js.map