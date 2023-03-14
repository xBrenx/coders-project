import Router from "express"
import routerList from "./ListMovies.router";
import routerUser from "./user"
import routerDetail from "./DetailsMovie.router"

const router = Router();

router.use("/list/", routerList)
router.use('/users/', routerUser)
router.use("/details/", routerDetail)



export default router;