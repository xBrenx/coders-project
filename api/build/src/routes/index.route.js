"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ListMovies_router_1 = __importDefault(require("./ListMovies.router"));
const user_1 = __importDefault(require("./user"));
const DetailsMovie_router_1 = __importDefault(require("./DetailsMovie.router"));
const router = (0, express_1.default)();
router.use("/list/", ListMovies_router_1.default);
router.use('/users/', user_1.default);
router.use("/details/", DetailsMovie_router_1.default);
exports.default = router;
