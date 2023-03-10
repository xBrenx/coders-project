import { Router } from "express";
import { getUsers, getUser, createUser, confirm, updateUser, deleteUser }from "../Controllers/User.Controllers"

const router = Router()

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.post('/confirm/:token', confirm)
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)

export default router;