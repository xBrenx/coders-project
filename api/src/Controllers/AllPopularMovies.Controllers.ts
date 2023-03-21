import axios from "axios";
import dotenv from "dotenv";
import tmdb from "./ConstantesTMDB";

import { inData } from "./FuncionesTMDB";
import { Movie } from "interfaces/movieInterfaces";

dotenv.config();
const KEY = process.env.KEY;

export default async function allPopularMovies(): Promise<Movie[] | string> {
  try {
    const res = await axios.get(`${tmdb.baseUrlMovie}popular${KEY}&page=1`);
    const data = await inData(res.data.results);
    return data;
  } catch (error:any) {
    return error.message;
  }
}
