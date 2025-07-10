import { IOmdbRepository } from '@/domain/repositories/IOmdbRepository'
import { Detalle } from '../models/pelicula';

export async function obtenerDetalle (repo: IOmdbRepository, id: string): Promise<Detalle> {
    if (!id) return {} as Detalle;
    return await repo.obtenerDetalle(id);
}