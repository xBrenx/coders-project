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
const axios_1 = __importDefault(require("axios"));
const ConstantesTMDB_1 = __importDefault(require("./ConstantesTMDB"));
const dotenv_1 = __importDefault(require("dotenv"));
const FuncionesTMDB_1 = require("./FuncionesTMDB");
//key---------
dotenv_1.default.config();
const KEY = process.env.KEY;
function TopMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield axios_1.default.get(`${ConstantesTMDB_1.default.baseUrlMovie}top_rated${KEY}`);
            const data = yield (0, FuncionesTMDB_1.inData)(res.data.results);
            return data;
        }
        catch (error) {
            return error.message;
        }
    });
}
exports.default = TopMovies;
//# sourceMappingURL=top_ratedMovies.js.map