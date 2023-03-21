import axios from 'axios';
import { Movie, Genre } from "interfaces/movieInterfaces";
import tmdb from "./ConstantesTMDB";
import dotenv from "dotenv";

//KEY-----
dotenv.config()
const KEY = process.env.KEY;

const inGenre = async (genresIds: number[]) => {
    const apiGenres = await axios.get(
      `${tmdb.baseUrl}genre/movie/list${KEY}`
    );
    const genres = genresIds.map((g: number) => {
      const genre = apiGenres.data.genres.find((e: Genre) => e.id === g);
      return genre.name;
    });
    return genres;
  };

  const inVideo = async (id: number) => {
    const data = await axios(`${tmdb.baseUrlMovie}${id}/videos${KEY}`)
    const keyVideo = await data.data.results.find((e:any) => e.type === "Trailer")
    if(keyVideo === undefined){
       let video: boolean = false;
       return video
    }
    let video: string= tmdb.youtubePAth(keyVideo.key)

    return video;
  }

  //data será un arreglo de objetos

  export const inData = async (results: any[]) => {
    const data: Movie[] = [];
    for (let m of results) {
      const genres = await inGenre(m.genre_ids);
       const videos = await inVideo(m.id)
      data.push({
        id: m.id,
        adult: m.adult,
        title: m.original_title,
        resume: m.overview,
        poster: tmdb.backdropPath(m.poster_path),
        backdrop: tmdb.backdropPath(m.backdrop_path),
        genres: genres,
        videos: videos
      });
    }

    return data;
  };