import { Router } from "express";
import allPopularMovies from "../Controllers/AllPopularMovies.Controllers";
import TopMovies from "../Controllers/top_ratedMovies";
import UpcomingMovies from "../Controllers/upcomingMovies";

const router = Router();

router.get("/populars", async (_req, res) => {
  try {
    const allPopulars = await allPopularMovies();
    res.status(200).send(allPopulars);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/top", async (_req, res) => {
  try {
    const allTop = await TopMovies();
    res.status(200).send(allTop);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/upcoming", async (_req, res) => {
  try {
    const allUpcoming = await UpcomingMovies();
    res.status(200).send(allUpcoming);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
