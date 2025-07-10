export interface Pelicula {
    Title: string;
    Year: string;
    imdbID: string;
    Type: 'movie' | 'series';
    Poster: string;
}

export interface PeliculaResultadoBusqueda {
    Search: Pelicula[];
    totalPages: number;
    Response: 'True' | 'False';
    Error?: string;
}

export interface Detalle {
    Title: string
    Year: string
    Genre: string
    Director: string
    Actors: string
    Plot: string
    Poster: string
    Response: 'True' | 'False';
    Error?: string;
}