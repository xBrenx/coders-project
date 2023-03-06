import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config()

//keys importantes----------------------------------

const KEY = process.env.KEY;
const IMAGE_PATH = process.env.IMAGE_PATH;

//INTERFACES----------------------------------
//DEFINIMOS DATOS QUE ESPERA CADA PROPIEDAD---

interface Movie {
  id: number;
  adult: boolean;
  title: string;
  resume: string;
  poster: string;
  backdrop: string;
  genres: any[];
}

interface Genre {
  id: number;
  name: string;
}

//FIN DE INTERFACES----------------------------------

export default async function allPopularMovies(): Promise<Movie[]> {
  //inGenre recibe un array con los id de los generos, y devuelve un array de generos.
  const inGenre = async (genresIds: number[]) => {
    const apiGenres = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
    );
    const genres = genresIds.map((g: number) => {
      const genre = apiGenres.data.genres.find((e: Genre) => e.id === g);
      return genre.name;
    });

    return genres;
  };

  //data será un arreglo de objetos
  const data: Movie[] = [];

  const inData = async (results: any[]) => {
    for (let m of results) {
      const genres = await inGenre(m.genre_ids);
      data.push({
        id: m.id,
        adult: m.adult,
        title: m.original_title,
        resume: m.overview,
        poster: IMAGE_PATH + m.poster_path,
        backdrop: IMAGE_PATH + m.backdrop_path,
        genres: genres,
      });
    }
  };

  //Tomamos los datos y filtramos la información usan inData
  await axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=1`)
    .then((res) => res.data.results)
    .then((results) => inData(results))
    .catch((error) => console.log(error));

  return data;
}
