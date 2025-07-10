'use client'
import ListaResultados from '@/components/ListaResultados';
import Paginacion from '@/components/Paginacion';
import SelectTipo from '@/components/SelectTipo';
import { FuenteListado } from '@/domain/enums/FuenteListado';
import { TipoFiltro } from '@/domain/enums/TipoFiltro';
import { useLogicaFavoritos } from '@/hooks/useLogicaFavoritos';

export default function FavoritosCliente () {
    const {
        valorBusqueda,
        setValorBusqueda,
        tipoBusqueda,
        setTipoBusqueda,
        pagina,
        setPagina,
        itemsPaginados,
        totalPaginas
    } = useLogicaFavoritos(10)

    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={valorBusqueda}
                        onChange={e => setValorBusqueda(e.target.value)}
                        placeholder="Buscar en favoritos…"
                        className="
                        w-full rounded border px-3 py-2
                        placeholder-gray-400 focus:outline-none
                        focus:ring-2 focus:ring-orange-300 transition
                        border-gray-300
                    "
                    />
                    <SelectTipo
                        value={tipoBusqueda}
                        onChange={(value: TipoFiltro) => setTipoBusqueda(value)}
                    />
                </div>
            </div>

            <ListaResultados
                items={itemsPaginados}
                loading={false}
                seRealizoBusqueda={valorBusqueda.trim() !== ''}
                contadorSkeleton={10}
                fuente={FuenteListado.Favoritos}
            />

            {totalPaginas > 1 && (
                <Paginacion
                    paginaActual={pagina}
                    totalPaginas={totalPaginas}
                    onChange={setPagina}
                />
            )}
        </>
    )
}