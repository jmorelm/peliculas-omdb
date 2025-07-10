import { Detalle, PeliculaResultadoBusqueda } from '@/domain/models/pelicula';
import { IOmdbRepository } from '@/domain/repositories/IOmdbRepository';
import { omdbServices } from '@/services/omdbServices';
import { peliculaToEntity } from 'data/mappers/peliculaToEntity';

export class OmdbRepository implements IOmdbRepository {
    async buscarPeliculas (titulo: string, tipo?: 'movie' | 'series', pagina?: number): Promise<PeliculaResultadoBusqueda> {
        const dto = await omdbServices.buscarPeliculas(titulo, tipo, pagina != null ? String(pagina) : undefined)

        if (dto.Response === 'False') {
            if (dto.Error?.includes('Movie not found')) {
                return { Search: [], totalPages: 0, Response: dto.Response, Error: dto.Error }
            }

            throw new Error(dto.Error ?? 'Ocurrio un error durante la busqueda.')
        }

        return peliculaToEntity(dto)
    }

    async obtenerDetalle (id: string): Promise<Detalle> {
        const dto = await omdbServices.getDetallePelicula(id);

        if (dto.Response === 'False') {
            if (dto.Error?.includes('Incorrect IMDb ID.')) {
                return {} as Detalle;
            }

            throw new Error(dto.Error ?? 'Ocurrio un error durante la obtencion de los detalles.')
        }

        return dto;
    }
}