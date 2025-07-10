export type TipoFiltro = '' | 'movie' | 'series'

export const FILTRO_OPCIONES: { label: string; value: TipoFiltro }[] = [
  { label: 'Todos',     value: ''       },
  { label: 'Películas', value: 'movie'  },
  { label: 'Series',    value: 'series' },
]