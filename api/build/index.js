"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3005;
const MoviesPort = 3001;
const db_1 = __importDefault(require("./db"));
const app_1 = __importDefault(require("./app"));
app.listen(PORT, () => {
    app_1.default.listen(MoviesPort, () => {
        console.log(`Server is running on port ${MoviesPort}`); // eslint-disable-line no-console
    });
    (0, db_1.default)();
});
//# sourceMappingURL=index.js.map