'use client'
import { useParams, useSearchParams } from 'next/navigation'
import VerDetallePelicula from '@/components/VerDetallePelicula'
import SkeletonDetalles from '@/components/SkeletonDetalles';
import useFetchDetallePelicula from '@/hooks/useFetchDetallePelicula';
import { PATHS } from '@/domain/utils/rutas';
import { FuenteListado } from '@/domain/enums/FuenteListado';

const DetalleCliente = () => {
    const { imdbID } = useParams();
    const parametrosBusqueda = useSearchParams()
    const paginaOrigen = (parametrosBusqueda.get('desde') as FuenteListado) || FuenteListado.Principal;
    const navAtrasHref = paginaOrigen === FuenteListado.Favoritos ? PATHS.FAVORITOS() : PATHS.PRINCIPAL();
    
    const { detalle, loading, error } = useFetchDetallePelicula(imdbID as string)

    if (loading) return <SkeletonDetalles />
    if (error || !detalle) return null
    
    return <VerDetallePelicula detalle={detalle} navAtrasHref={navAtrasHref} />
}

export default DetalleCliente;