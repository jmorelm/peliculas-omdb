import { useMemo } from 'react'
import ResultadoPelicula from './ResultadoPelicula'
import { Pelicula } from '@/types/omdb'
import SkeletonPeliculas from './SkeletonPeliculas'
import { FuenteListado } from '@/domain/enums/FuenteListado';

interface ListaResultadosProps {
  items: Pelicula[];
  loading?: boolean;
  contadorSkeleton?: number;
  seRealizoBusqueda?: boolean;
  fuente?: FuenteListado;
}

const ListaResultados = ({ items, loading = false, contadorSkeleton = 10, seRealizoBusqueda = false, fuente = FuenteListado.Principal }: ListaResultadosProps) => {
  const skeletonKeys = useMemo(
    () =>
      Array.from({ length: contadorSkeleton }, () =>
        crypto.randomUUID()
      ),
    [contadorSkeleton]
  )

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {loading
          ?
          skeletonKeys.map((key) => (
            <SkeletonPeliculas key={key} />
          ))
          : items.map((pelicula) => (
            <ResultadoPelicula
              key={pelicula.imdbID}
              movie={pelicula}
              fuente={fuente}
            />
          ))}
      </div>

      {!loading && seRealizoBusqueda && items.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No se encontraron resultados.
        </p>
      )}
    </div>
  )
}

export default ListaResultados;