'use client'
import usePaginacion from '@/hooks/usePaginacion'
import { tw } from 'lib/tw'
import { memo } from 'react'

interface PaginacionProps {
    paginaActual: number
    totalPaginas: number
    onChange: (nueva: number) => void
}

const Paginacion = ({ paginaActual, totalPaginas, onChange }: PaginacionProps) => {
    const paginasFiltradas = usePaginacion(paginaActual, totalPaginas)

    return (
        <nav className="flex flex-wrap justify-center items-center space-x-2 mt-6 max-w-7xl mx-auto px-4">
            <button
                onClick={() => onChange(paginaActual - 1)}
                disabled={paginaActual === 1}
                className={`${tw.btnBasePaginacion} ${tw.btnPaginacionDisabled} ${tw.btnPaginacionHover} transition`}
            >
                Anterior
            </button>

            {paginasFiltradas.map((p, idx) =>
                p === '...' ? (
                    <span key={`dots-${p}-${idx}`} className="px-2 text-gray-500">
                        ...
                    </span>
                ) : (
                    <button
                        key={p}
                        onClick={() => onChange(p)}
                        disabled={p === paginaActual}
                        aria-current={p === paginaActual ? 'page' : undefined}
                        className={`${tw.btnBasePaginacion}
                                    ${p === paginaActual
                                        ? `${tw.backgroundColorBase}`
                                        : `${tw.btnPaginacionHover}`}
                                        transition`}
                    >
                        {p}
                    </button>
                )
            )}

            <button
                onClick={() => onChange(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
                className={`${tw.btnBasePaginacion} ${tw.btnPaginacionDisabled} ${tw.btnPaginacionHover} transition`}
            >
                Siguiente
            </button>
        </nav>
    )
}

export default memo(Paginacion);