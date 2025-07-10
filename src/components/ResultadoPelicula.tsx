'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { Pelicula } from '@/types/omdb'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { tw } from 'lib/tw'
import { AssetsPublicos } from '@/domain/enums/AssetsPublicos'
import useFavorito from '@/hooks/useFavorito'
import useVerificarOverflow from '@/hooks/useVerificarOverflow'
import RenderPortada from './RenderPortada'
import { FuenteListado } from '@/domain/enums/FuenteListado'
import { PATHS } from '@/domain/utils/rutas'

interface ResultadoPeliculaProps {
  movie: Pelicula;
  fuente?: FuenteListado;
}

const ResultadoPelicula = ({ movie, fuente }: ResultadoPeliculaProps) => {
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const { isFavorito, onToggle } = useFavorito(movie);
  const estaDesbordado = useVerificarOverflow(tituloRef);
  const tipoResultado = (t: string) => (t === 'movie' ? 'Pelicula' : 'Serie');
  const href = PATHS.DETALLE_PELICULA(movie.imdbID, fuente)

  return (
    <div className="group block">
      <div
        className={`
          overflow-hidden rounded-lg shadow-md
          transform transition duration-200 group-hover:scale-105
          border ${isFavorito ? 'border-red-900 group-hover:border-red-500' : 'border-stone-600 group-hover:border-orange-300'}
        `}
        style={{
          boxShadow: isFavorito ? '0 4px 18px rgba(253, 14, 14, 0.09)' : '0 4px 18px rgba(48, 48, 48, 0.25)',
        }}
      >
        <Link href={href}>
          <div className={`h-64 ${tw.contenedorImg} overflow-hidden`}>
            <RenderPortada
              src={movie.Poster !== 'N/A' ? movie.Poster : AssetsPublicos.PortadaNoDisponible}
              alt={movie.Title}
              width={250}
              height={250}
            />
          </div>
        </Link>
        <div className="p-4">
          <div className="overflow-hidden">
            <h3 ref={tituloRef} className={`text-lg font-semibold ${estaDesbordado ? 'marquee' : 'truncate'}`}>
              {movie.Title}
            </h3>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {movie.Year} • {tipoResultado(movie.Type)}
            </p>
            <button
              onClick={onToggle}
              type="button"
              aria-label={
                isFavorito
                  ? 'Quitar de favoritos'
                  : 'Agregar a favoritos'
              }
              className="p-1 rounded-full shadow transition"
            >
              {isFavorito ? (
                <HeartSolid className="w-6 h-6 text-white hover:text-white" />
              ) : (
                <HeartOutline className="w-6 h-6 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultadoPelicula;