type CadenaBoolean = 'True' | 'False';

export interface Pelicula {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie' | 'series';
  Poster: string;
}

export interface ResponseBusqueda {
  Search: Pelicula[];
  totalResults: string;
  Response: CadenaBoolean;
  Error?: string;
}

export interface DetallePelicula {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Response: CadenaBoolean;
  Error?: string;
}