import { Router } from "express"; 
import detailMovie from "../Controllers/MovieDetails";

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const details = await detailMovie(parseInt(id));
    res.status(200).send(details);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;