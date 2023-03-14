"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passwordControler_1 = require("../Controllers/passwordControler");
const router = (0, express_1.Router)();
router.post("/forgot", passwordControler_1.forgotPassword);
router.put("/reset", passwordControler_1.resetPassword);
exports.default = router;
//# sourceMappingURL=password.js.map