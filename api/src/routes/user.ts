import { Router } from "express";
import { getUsers, getUser, createUser, confirm, updateUser, deleteUser }from "../Controllers/User.Controllers"

const router = Router()

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/login', getUser)
router.post('/', createUser);
router.get('/confirm/:token', confirm)
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)

export default router;