import { IOmdbRepository } from '@/domain/repositories/IOmdbRepository'
import { PeliculaResultadoBusqueda } from '../models/pelicula'

export async function buscarPeliculas (
    repo: IOmdbRepository,
    titulo: string,
    tipo: 'movie' | 'series' | undefined,
    pagina: number
): Promise<PeliculaResultadoBusqueda> {
    if (!titulo?.trim()) {
        return { Search: [], totalPages: 0, Response: 'False', Error: '' }
    }

    return await repo.buscarPeliculas(titulo, tipo, pagina)
}