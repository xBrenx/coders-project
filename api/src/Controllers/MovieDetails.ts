import axios from "axios";
import * as dotenv from "dotenv"

dotenv.config()

//keys importantes----------------------------------

const KEY = process.env.KEY;
const IMAGE_PATH = process.env.IMAGE_PATH;
const IMAGE_500 = process.env.IMAGE_500;

//INTERFACES----------------------------------
//DEFINIMOS DATOS QUE ESPERA CADA PROPIEDAD---

interface collection {
    belongs: boolean,
    name: string,
    poster: string,
    backdrop: string,
}

interface production {
  name: string,
  logo: string
}

interface MovieDetails {
    adult: boolean,
    title: string,
    overview: string,
    backdrop: string,
    poster: string,
    collection: collection,
    production: production,
    genres: string[],
    vote_average: number,
    vote_count: number

}


export default async function detailMovie(id: number){

  let data: MovieDetails = {} as MovieDetails;

    const inCollection = (b: any): collection => {
        let belongs_to_collection = { belongs: false, name: '', poster: '', backdrop: '' };
      
        if (b !== null) {
          belongs_to_collection = {
            belongs: true,
            name: b.name,
            poster: IMAGE_PATH + b.poster_path,
            backdrop: IMAGE_PATH + b.backdrop_path
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
      console.log(r)
        data = {
        adult: r.adult,
        title: r.original_title,
        overview: r.overview,
        backdrop: IMAGE_PATH + r.backdrop_path,
        poster: IMAGE_PATH + r.poster_path,
        collection: inCollection(r.belongs_to_collection),
        production: {name: r.production_companies[0].name, logo: IMAGE_500 + r.production_companies[0].logo_path},
        genres: inGenre(r.genres),
        vote_average: r.vote_average,
        vote_count: r.vote_count
        };
        return data;
      };
      

      await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
      .then(res => inMovie(res.data))
      .then(data => data)
      .catch(error => console.log(error))
      return data;
}

//https://api.themoviedb.org/3/movie/631842/credits?api_key=a89dd589c83472059832163f1a16d064