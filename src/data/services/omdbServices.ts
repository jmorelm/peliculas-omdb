import { DetallePelicula, ResponseBusqueda } from '../types/omdb'
import baseApi from '../config/apiInterceptor';

async function buscarPeliculas (titulo: string, tipo?: 'movie' | 'series', pagina?: string): Promise<ResponseBusqueda> {
  const params: Record<string, string> = { s: titulo };
  if (tipo) params.type = tipo;
  if (pagina) params.page = pagina;
  const { data } = await baseApi.get<ResponseBusqueda>('/', { params });

  return data;
}

async function getDetallePelicula (id: string): Promise<DetallePelicula> {
  const { data } = await baseApi.get<DetallePelicula>('/', { params: { i: id } });

  return data;
}

export const omdbServices = {
  buscarPeliculas,
  getDetallePelicula
}