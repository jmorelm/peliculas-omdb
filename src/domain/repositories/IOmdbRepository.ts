import { Detalle, PeliculaResultadoBusqueda } from "../models/pelicula";

export interface IOmdbRepository {
  buscarPeliculas (titulo: string, tipo: 'movie' | 'series' | undefined, pagina: number): Promise<PeliculaResultadoBusqueda>;
  obtenerDetalle (id: string): Promise<Detalle>;
}