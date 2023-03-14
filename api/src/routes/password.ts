import { Router } from "express";
import { forgotPassword, resetPassword } from "../Controllers/passwordControler";

const router = Router()

router.post("/forgot", forgotPassword)
router.put("/reset", resetPassword)

export default router;