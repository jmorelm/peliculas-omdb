import { z } from 'zod'

export const formBusquedaSchema = z.object({
  query: z.string().min(1, 'Introduce al menos un caracter'),
  type: z.enum(['', 'movie', 'series']),
  page: z.coerce
    .number()
    .int()
    .min(1)
})

export type FormBusqueda = z.infer<typeof formBusquedaSchema>