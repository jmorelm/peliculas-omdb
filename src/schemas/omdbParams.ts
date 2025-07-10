import { z } from 'zod'

export const searchParamsSchema = z.object({
  title: z.string().min(1, 'El título no puede estar vacío'),
  type: z.enum(['movie', 'series', '']).optional().default(''),
  page: z.string().optional().default('1')
})

export type SearchParams = z.infer<typeof searchParamsSchema>