import Router from "express"
import routerList from "./ListMovies.router";
import routerUser from "./user"

const router = Router();

router.use("/list/", routerList)
router.use('/users/', routerUser)


export default router;