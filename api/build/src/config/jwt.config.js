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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenData = exports.generateToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const secret = process.env.JWT_KEY;
console.log(secret);
const generateToken = (payload) => {
    console.log("jwt.config linea 10", payload);
    if (secret === undefined) {
        throw new Error("JWT_KEY not defined");
    }
    else {
        return jwt.sign(payload, secret || "", { expiresIn: "1h" });
    }
};
exports.generateToken = generateToken;
const getTokenData = (token) => {
    console.log("token que recibe getTokenData en la linea 18", token);
    let data = null;
    try {
        data = jwt.verify(token, secret || "");
        console.log("jwt.config linea 30", data);
    }
    catch (error) {
        console.log("error que arroja getTokenData linea 24", error);
        if (error instanceof jwt.TokenExpiredError) {
            data = { message: "Token expired" };
        }
        else if (error instanceof jwt.JsonWebTokenError) {
            data = { message: "Invalid token" };
        }
    }
    return data;
};
exports.getTokenData = getTokenData;
