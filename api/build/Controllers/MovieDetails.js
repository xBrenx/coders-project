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
const IMAGE_500 = process.env.IMAGE_500;
function detailMovie(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = {};
        const inCollection = (b) => {
            let belongs_to_collection = { belongs: false, name: '', poster: '', backdrop: '' };
            if (b !== null) {
                belongs_to_collection = {
                    belongs: true,
                    name: b.name,
                    poster: IMAGE_PATH + b.poster_path,
                    backdrop: IMAGE_PATH + b.backdrop_path
                };
            }
            return belongs_to_collection;
        };
        const inGenre = (genresArray) => {
            const genres = genresArray.map((g) => {
                return g.name;
            });
            return genres;
        };
        const inMovie = (r) => {
            console.log(r);
            data = {
                adult: r.adult,
                title: r.original_title,
                overview: r.overview,
                backdrop: IMAGE_PATH + r.backdrop_path,
                poster: IMAGE_PATH + r.poster_path,
                collection: inCollection(r.belongs_to_collection),
                production: { name: r.production_companies[0].name, logo: IMAGE_500 + r.production_companies[0].logo_path },
                genres: inGenre(r.genres),
                vote_average: r.vote_average,
                vote_count: r.vote_count
            };
            return data;
        };
        yield (0, axios_1.default)(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
            .then(res => inMovie(res.data))
            .then(data => data)
            .catch(error => console.log(error));
        return data;
    });
}
exports.default = detailMovie;
//https://api.themoviedb.org/3/movie/631842/credits?api_key=a89dd589c83472059832163f1a16d064
//# sourceMappingURL=MovieDetails.js.map