import { Router } from "express";
import allPopularMovies from "../Controllers/AllPopularMovies.Controllers";

const router = Router();

router.get("/populars", async (_req, res) => {
  try {
    const allPopulars = await allPopularMovies();
    res.status(200).send(allPopulars);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
