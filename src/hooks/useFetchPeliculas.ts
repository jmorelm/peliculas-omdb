import { RutasApi } from '@/domain/enums/RutasApi';
import { construirUrl } from '@/domain/utils/construirUrl';
import { useApi } from './useApi';
import { PeliculaResultadoBusqueda } from '@/domain/models/pelicula';

const useFetchPeliculas = (title: string, type: '' | 'movie' | 'series', pagina: number) => {
  const realizarBusqueda = title?.trim() !== '';

  const url = realizarBusqueda ? construirUrl(RutasApi.BuscarPeliculas,
    {
      title: title,
      type: type || undefined,
      page: pagina
    }
  ) : null;

  const { data, loading, error } = useApi<{ resultados: PeliculaResultadoBusqueda; error?: string }>(
    url,
    {
      mensajes: {
        cargando: 'Buscando películas y series...',
        error: 'Ocurrio un error durante la busqueda de peliculas y series.',
      }
    }
  );

  return {
    resultados: data?.resultados?.Search ?? [],
    loading: loading,
    totalPaginas: data?.resultados.totalPages ?? 0,
    error: error || (data?.error && new Error(data.error)),
  }
}

export default useFetchPeliculas;