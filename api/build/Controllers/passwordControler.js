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
exports.resetPassword = exports.forgotPassword = void 0;
const users_1 = require("../Models/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_config_1 = require("../config/jwt.config");
const mail_config_1 = require("../config/mail.config");
const SALT = 12;
// forgot password
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.body;
    console.log(token);
    const data = (0, jwt_config_1.getTokenData)(token);
    const { email } = data;
    console.log(data);
    try {
        let user = yield users_1.User.findOne({
            email: email,
        });
        if (user) {
            const template = (0, mail_config_1.getForgotPassTemplate)(user.name, token);
            yield (0, mail_config_1.sendEmail)(email, "Reset your password", template);
            res.send({ msg: "An email has been sent for you to restore your password" });
        }
        else {
            res.send({ msg: "No user registered with the email given" });
        }
    }
    catch (error) {
        res.send(error);
    }
});
exports.forgotPassword = forgotPassword;
// restore password
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let passwordHashed = yield bcrypt_1.default.hash(password, SALT);
    const search = yield users_1.User.find({ email: email });
    if (search) {
        let user = search[0];
        user.password = passwordHashed;
        user.save();
        res.send({ msg: "Your new password has been set correctly" });
    }
    else {
        res.send({ msg: "No user registered with this email" });
    }
});
exports.resetPassword = resetPassword;
//# sourceMappingURL=passwordControler.js.map