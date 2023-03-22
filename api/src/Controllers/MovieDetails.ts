import axios from "axios";
import * as dotenv from "dotenv"
import tmdb from "./ConstantesTMDB";

//INTERFACES----------------------------------
import { MovieDetails, collection } from "interfaces/movieInterfaces";

//keys importantes----------------------------------
dotenv.config()
const KEY = process.env.KEY;

export default async function detailMovie(id: number){

  let data: MovieDetails = {} as MovieDetails;

    const inCollection = (b: any): collection => {
        let belongs_to_collection = { belongs: false, name: '', poster: '', backdrop: '' };
      
        if (b !== null) {
          belongs_to_collection = {
            belongs: true,
            name: b.name,
            poster: tmdb.posterPath(b.poster_path),
            backdrop: tmdb.backdropPath(b.backdrop_path)
          };
        }
      
        return belongs_to_collection;
      };
      
      const inGenre = (genresArray: any[]) => {
        const genres = genresArray.map((g) => {
          return g.name;
        });
        return genres;
      };

    const inMovie = (r: any) => {
        data = {
          id: id,
        adult: r.adult,
        title: r.original_title,
        overview: r.overview,
        backdrop: tmdb.backdropPath(r.backdrop_path),
        poster: tmdb.posterPath(r.poster_path),
        collection: inCollection(r.belongs_to_collection),
        production: {name: r.production_companies[0].name, logo: tmdb.posterPath(r.production_companies[0].logo_path)},
        genres: inGenre(r.genres),
        vote_average: r.vote_average,
        vote_count: r.vote_count
        };
        return data;
      };
      

      await axios(`${tmdb.baseUrl}movie/${id}${KEY}`)
      .then(res => inMovie(res.data))
      .then(data => data)
      .catch(error => console.log(error))
      return data;
}

//https://api.themoviedb.org/3/movie/631842/credits?api_key=a89dd589c83472059832163f1a16d064