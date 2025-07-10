import { z } from 'zod'

export const envSchema = z.object({
    OMDB_API_KEY: z.string().min(1, 'La API key de OMDB es obligatoria'),
})

export type Env = z.infer<typeof envSchema>

export function parseEnv(): Env {
    return envSchema.parse(process.env)
}