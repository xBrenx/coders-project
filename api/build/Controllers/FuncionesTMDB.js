"use strict";
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
exports.inData = void 0;
const axios_1 = __importDefault(require("axios"));
const ConstantesTMDB_1 = __importDefault(require("./ConstantesTMDB"));
const dotenv_1 = __importDefault(require("dotenv"));
//KEY-----
dotenv_1.default.config();
const KEY = process.env.KEY;
const inGenre = (genresIds) => __awaiter(void 0, void 0, void 0, function* () {
    const apiGenres = yield axios_1.default.get(`${ConstantesTMDB_1.default.baseUrl}genre/movie/list${KEY}`);
    const genres = genresIds.map((g) => {
        const genre = apiGenres.data.genres.find((e) => e.id === g);
        return genre.name;
    });
    return genres;
});
const inVideo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, axios_1.default)(`${ConstantesTMDB_1.default.baseUrlMovie}${id}/videos${KEY}`);
    const keyVideo = yield data.data.results.find((e) => e.type === "Trailer");
    if (keyVideo === undefined) {
        let video = false;
        return video;
    }
    let video = ConstantesTMDB_1.default.youtubePAth(keyVideo.key);
    return video;
});
//data será un arreglo de objetos
const inData = (results) => __awaiter(void 0, void 0, void 0, function* () {
    const data = [];
    for (let m of results) {
        const genres = yield inGenre(m.genre_ids);
        const videos = yield inVideo(m.id);
        data.push({
            id: m.id,
            adult: m.adult,
            title: m.original_title,
            resume: m.overview,
            poster: ConstantesTMDB_1.default.backdropPath(m.poster_path),
            backdrop: ConstantesTMDB_1.default.backdropPath(m.backdrop_path),
            genres: genres,
            videos: videos
        });
    }
    return data;
});
exports.inData = inData;
//# sourceMappingURL=FuncionesTMDB.js.map