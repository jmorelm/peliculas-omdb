import { useState, useMemo, useEffect } from 'react'
import { usePeliculaStore } from '@/store/usePeliculaStore'
import type { Pelicula } from '@/domain/models/pelicula'
import type { TipoFiltro } from '@/domain/enums/TipoFiltro'

export function useLogicaFavoritos (itemsPorPagina = 10) {
    const { favoritos } = usePeliculaStore()
    const favoritosArray = useMemo<Pelicula[]>(
        () => Object.values(favoritos),
        [favoritos]
    )

    const [valorBusqueda, setValorBusqueda] = useState('')
    const [tipoBusqueda, setTipoBusqueda] = useState<TipoFiltro>('')
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        setPagina(1)
    }, [valorBusqueda, tipoBusqueda])

    const filtrado = useMemo(() => {
        const term = valorBusqueda.trim().toLowerCase()
        return favoritosArray.filter(item => {
            const matchesTitle = item.Title.toLowerCase().includes(term)
            const matchesType = tipoBusqueda === '' || item.Type === tipoBusqueda
            return matchesTitle && matchesType
        })
    }, [favoritosArray, valorBusqueda, tipoBusqueda])

    const totalPaginas = Math.max(1, Math.ceil(filtrado.length / itemsPorPagina))
    const itemsPaginados = useMemo(() => {
        const start = (pagina - 1) * itemsPorPagina
        return filtrado.slice(start, start + itemsPorPagina)
    }, [filtrado, pagina, itemsPorPagina])

    return {
        valorBusqueda,
        setValorBusqueda,
        tipoBusqueda,
        setTipoBusqueda,
        pagina,
        setPagina,
        filtrado,
        itemsPaginados,
        totalPaginas
    }
}
