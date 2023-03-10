"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenData = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.JWT_KEY;
const generateToken = (payload) => {
    if (secret === undefined) {
        throw new Error("JWT_KEY not defined");
    }
    else {
        return jsonwebtoken_1.default.sign(payload, secret || "", { expiresIn: "1h" });
    }
};
exports.generateToken = generateToken;
const getTokenData = (token) => {
    let data = null;
    try {
        data = jsonwebtoken_1.default.verify(token, secret || "");
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            data = { message: "Token expired" };
        }
        else if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            data = { message: "Invalid token" };
        }
    }
    return data;
};
exports.getTokenData = getTokenData;
//# sourceMappingURL=jwt.config.js.map