
import { Pelicula, PeliculaResultadoBusqueda } from '@/domain/models/pelicula'
import type { ResponseBusqueda } from '@/types/omdb'

export const peliculaToEntity = (dto: ResponseBusqueda): PeliculaResultadoBusqueda => {
    const itemsOriginal = dto.Search ?? []
    const map = new Map<string, Pelicula>()

    for (const i of itemsOriginal) {
        if (!map.has(i.imdbID)) {
            map.set(i.imdbID, {
                imdbID: i.imdbID,
                Title: i.Title,
                Year: i.Year,
                Type: i.Type,
                Poster: i.Poster,
            })
        }
    }

    const items = Array.from(map.values())
        .sort((a, b) => parseInt(b.Year) - parseInt(a.Year))

    const total = parseInt(dto.totalResults ?? '0', 10)
    const totalPaginas = Math.ceil(total / 10)

    return { Search: items, totalPages: totalPaginas, Response: dto.Response, Error: dto.Error }
}