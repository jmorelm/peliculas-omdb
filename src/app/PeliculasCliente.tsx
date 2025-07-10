'use client'
import { useRef, useCallback } from 'react'
import BarraBusqueda from '../components/BarraBusqueda'
import ListaResultados from '../components/ListaResultados'
import Paginacion from '../components/Paginacion'
import { usePeliculaStore } from '@/store/usePeliculaStore'
import useFetchPeliculas from '@/hooks/useFetchPeliculas'
import { FuenteListado } from '@/domain/enums/FuenteListado'

const PeliculasCliente = () => {
    const { query, type, pagina, setQuery, setType, setPagina } = usePeliculaStore();
    const { resultados, totalPaginas, loading, error } = useFetchPeliculas(query, type, pagina);
    const lastTotalRef = useRef<number>(totalPaginas);

    if (!loading && totalPaginas > 0) {
        lastTotalRef.current = totalPaginas
    }

    const handleSearch = useCallback(
        (q: string, t: '' | 'movie' | 'series') => {
            setPagina(1)
            setQuery(q)
            setType(t)
        },
        [setPagina, setQuery, setType]
    )

    return (
        <>
            <BarraBusqueda onSearch={handleSearch} />

            <ListaResultados
                items={resultados}
                loading={loading}
                contadorSkeleton={10}
                seRealizoBusqueda={query.trim() !== ''}
                fuente={FuenteListado.Principal}
            />

            {query.trim() !== '' && lastTotalRef.current > 1 && !error && (
                <Paginacion
                    paginaActual={pagina}
                    totalPaginas={lastTotalRef.current}
                    onChange={setPagina}
                />
            )}
        </>
    )
}

export default PeliculasCliente;