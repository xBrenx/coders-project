import Router from "express"
import routerList from "./ListMovies.router";
import routerUser from "./user"
import routerDetail from "./DetailsMovie.router"
import routerPassword from "./password"

const router = Router();

router.use("/list/", routerList)
router.use('/users/', routerUser)
router.use("/details/", routerDetail)
router.use('/password', routerPassword)



export default router;