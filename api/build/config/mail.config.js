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
exports.getForgotPassTemplate = exports.getTemplate = exports.sendEmail = void 0;
const nodemailer = require('nodemailer');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const EMAIL = process.env.EMAIL;
const EMAIL_PSSWRD = process.env.EMAIL_PSSWRD;
const mail = {
    user: EMAIL,
    pass: EMAIL_PSSWRD
};
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    tls: {
        rejectUnauthorized: false
    },
    secure: true,
    auth: {
        user: mail.user,
        pass: mail.pass, // generated ethereal password
    },
});
const sendEmail = (email, subject, html) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transporter.sendMail({
            from: `${mail.user}`,
            to: email,
            subject,
            text: "Welcome to I Brought Pop Corn",
            html,
        });
    }
    catch (error) {
        console.log("Something went wrong with your email", error);
    }
});
exports.sendEmail = sendEmail;
const getTemplate = (email, token) => {
    return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://www.flickr.com/photos/197399024@N05/52623616952/in/dateposted-public/" alt="">
          <h2>Hola ${email}</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:3001/users/confirm/${token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
};
exports.getTemplate = getTemplate;
const getForgotPassTemplate = (email, token) => {
    return `
          <head>
              <link rel="stylesheet" href="./style.css">
          </head>
          
          <div id="email___content">
              <img src="https://www.flickr.com/photos/197399024@N05/52623616952/in/dateposted-public/" alt="">
              <h2>Hola ${email}</h2>
              <p>Para establecer una nueva contraseña has click en el siguiente enlace</p>
              <a
                  href="http://localhost:3001/pasword/reset/${token}"
                  target="_blank"
              >Establecer nueva contraseña</a>
          </div>
        `;
};
exports.getForgotPassTemplate = getForgotPassTemplate;
module.exports = {
    sendEmail: exports.sendEmail,
    getTemplate: exports.getTemplate,
    getForgotPassTemplate: exports.getForgotPassTemplate
};
//# sourceMappingURL=mail.config.js.map