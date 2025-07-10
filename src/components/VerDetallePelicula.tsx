'use client'
import Link from 'next/link'
import type { DetallePelicula } from '@/types/omdb'
import { tw } from 'lib/tw'
import { AssetsPublicos } from '@/domain/enums/AssetsPublicos'
import RenderPortada from './RenderPortada'

interface VerDetallePeliculaProps {
    detalle: DetallePelicula;
    navAtrasHref: string;
}

const VerDetallePelicula = ({ detalle, navAtrasHref }: VerDetallePeliculaProps) => (
    <div className="relative max-w-4xl mx-auto border border-stone-600 shadow rounded p-4 mt-4" style={{ boxShadow: '0 4px 18px 0 rgba(0, 0, 0, 0.25)' }}>
        <div className={`${tw.contenedorImg} gap-4`}>
            <RenderPortada
                src={detalle.Poster !== 'N/A' ? detalle.Poster : AssetsPublicos.PortadaNoDisponible}
                alt={detalle.Title}
                width={250}
                height={250}
            />
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">
                    {detalle.Title} ({detalle.Year})
                </h2>
                <p><strong>Género:</strong> {detalle.Genre}</p>
                <p><strong>Director:</strong> {detalle.Director}</p>
                <p><strong>Actores:</strong> {detalle.Actors}</p>
                <p className="mt-4">{detalle.Plot}</p>
            </div>
        </div>

        <div className="text-right mt-4">
            <Link
                href={navAtrasHref}
                className={`px-4 py-2 ${tw.backgroundColorBase} text-black rounded hover:bg-orange-500 transition`}
            >
                {navAtrasHref === '/favoritos' ? 'Volver a favoritos' : 'Volver al inicio'}
            </Link>
        </div>
    </div>
)

export default VerDetallePelicula;