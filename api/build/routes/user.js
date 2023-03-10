"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_Controllers_1 = require("../Controllers/User.Controllers");
const router = (0, express_1.Router)();
router.get('/', User_Controllers_1.getUsers);
router.get('/:id', User_Controllers_1.getUser);
router.post('/', User_Controllers_1.createUser);
router.get('/confirm/:token', User_Controllers_1.confirm);
router.put('/:id', User_Controllers_1.updateUser);
router.delete('/:id', User_Controllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map