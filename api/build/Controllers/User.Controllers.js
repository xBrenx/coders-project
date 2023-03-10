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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.confirm = exports.createUser = exports.getUser = exports.getUsers = void 0;
const jwt_config_1 = require("../config/jwt.config");
const users_1 = require("../Models/users");
const { getTokenData } = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");
const { v4: uuidv4 } = require("uuid");
// get all users
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.User.find();
        res.json(users);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getUsers = getUsers;
// get user by id
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.User.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUser = getUser;
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, done } = req.body;
        let userName = yield users_1.User.findOne({
            name: name,
        });
        let userEmail = yield users_1.User.findOne({
            email: email,
        });
        if (userName || userEmail) {
            return done(null, false, console.log("This user name already exists"));
        }
        else {
            const code = uuidv4();
            let user = new users_1.User({ name, email, code, password });
            const token = (0, jwt_config_1.generateToken)({ email, code });
            const template = getTemplate(name, token);
            yield sendEmail(email, "Confirm your account", template);
            yield user.save();
            res.json({
                success: true,
                msg: "User successfully registered",
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: "Something went wrong. Registration has failed",
        });
    }
});
exports.createUser = createUser;
const confirm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        const data = getTokenData(token);
        if (data === null) {
            return res.json({
                success: false,
                msg: "Error. Data couldn't be acccessed ",
            });
        }
        const { email, code } = data;
        let user = yield users_1.User.findOne({
            email: email,
        });
        if (user === null) {
            return res.json({
                success: false,
                msg: "The user doesn't exist",
            });
        }
        if (code !== user.code) {
            return res.redirect("/error.html");
        }
        user.status = "VERIFIED";
        yield user.save();
        return res.redirect("http://localhost:3000/home");
        //return res.redirect("")
    }
    catch (error) {
        return res.json({
            success: false,
            msg: "Error al confirmar usuario",
        });
    }
});
exports.confirm = confirm;
// update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, passowrd } = req.body;
    try {
        yield users_1.User.findByIdAndUpdate(req.params.id, {
            // trae el usuario por id y actualiza email y passwor
            email,
            passowrd,
        });
        res.json({ message: " User updated successfully" });
    }
    catch (error) {
        res.json({ message: " Error updating user " });
    }
});
exports.updateUser = updateUser;
//delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield users_1.User.findByIdAndDelete(req.params.id);
        res.json({ message: " User deleted successfully" });
    }
    catch (error) {
        res.json({ message: " Error deleting user " });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=User.Controllers.js.map