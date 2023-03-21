
export interface collection {
    belongs: boolean,
    name: string,
    poster: string,
    backdrop: string,
}

export interface production {
  name: string,
  logo: string
}

export interface MovieDetails {
    id: number,
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


export interface Movie {
  id: number;
  adult: boolean;
  title: string;
  resume: string;
  poster: string;
  backdrop: string;
  genres: any[];
  videos: string | boolean;
}

export interface Genre {
  id: number;
  name: string;
}
