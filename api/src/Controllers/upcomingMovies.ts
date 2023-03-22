import axios from 'axios'
import tmdb from './ConstantesTMDB'
import dotenv from "dotenv";
import { inData } from './FuncionesTMDB';


//key---------
dotenv.config()
const KEY = process.env.KEY;

export default async function UpcomingMovies() {
    try {
      const res = await axios.get(`${tmdb.baseUrlMovie}upcoming${KEY}`);
      const data = await inData(res.data.results);
      return data;
    } catch (error:any) {
        return error.message;
    }
}