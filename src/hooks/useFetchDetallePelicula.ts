
import { construirUrl } from '@/domain/utils/construirUrl';
import { RutasApi } from '@/domain/enums/RutasApi';
import { useApi } from './useApi';
import { Detalle } from '@/domain/models/pelicula';

const useFetchDetallePelicula = (id: string) => {
    const url = id ? construirUrl(RutasApi.DetallePeliculas, { id }) : null;

    const { data, loading, error } = useApi<{ detalle: Detalle; error?: string }>(
        url,
        {
            mensajes: {
                cargando: 'Cargando detalle...',
                error: 'Ocurrió un error al cargar el detalle.',
            }
        }
    );

    return {
        detalle: data?.detalle,
        loading: loading,
        error: error || (data?.error && new Error(data.error))
    }
}

export default useFetchDetallePelicula;