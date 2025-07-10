import { FuenteListado } from "../enums/FuenteListado"

export const PATHS = {
    PRINCIPAL: () => '/',
    FAVORITOS: () => '/favoritos',
    DETALLE_PELICULA: (imdbID: string, origenPagina?: FuenteListado) => {
        const base = `/peliculas/${imdbID}`
        return origenPagina
            ? `${base}?desde=${origenPagina}`
            : base
    },
}