import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { StoreApi, UseBoundStore } from 'zustand'
import type { Pelicula } from '@/types/omdb'

interface PeliculaState {
    query: string
    type: '' | 'movie' | 'series'
    pagina: number,
    setQuery: (q: string) => void
    setType: (t: '' | 'movie' | 'series') => void
    setPagina: (pagina: number) => void
    favoritos: Record<string, Pelicula>
    toggleFavorito: (pelicula: Pelicula) => void
}

let peliculaStore: UseBoundStore<StoreApi<PeliculaState>> | undefined

const createPeliculaStore = (preloadedState?: Partial<PeliculaState>) => {
    return create<PeliculaState>()(
        persist(
            (set) => ({
                query: preloadedState?.query ?? '',
                type: preloadedState?.type ?? '',
                pagina: preloadedState?.pagina ?? 1,
                setQuery: q => set({ query: q }),
                setType: t => set({ type: t }),
                setPagina: p => set({ pagina: p }),
                favoritos: preloadedState?.favoritos ?? {},
                toggleFavorito: pelicula => {
                    const id = pelicula.imdbID
                    set(state => {
                        const nuevos = { ...state.favoritos }
                        if (nuevos[id]) {
                            delete nuevos[id]
                        } else {
                            nuevos[id] = pelicula
                        }
                        return { favoritos: nuevos }
                    })
                },
            }),
            {
                name: 'pelicula-store',
                partialize: state => ({ favoritos: state.favoritos }),
            }
        )
    )
}

export const initializePeliculaStore = (preloadedState?: Partial<PeliculaState>) => {
    const _store = peliculaStore ?? createPeliculaStore(preloadedState)
    if (typeof window === 'undefined') {
        return _store
    }
    peliculaStore ??= _store;
    return peliculaStore
}

export const usePeliculaStore = (preloadedState?: Partial<PeliculaState>) => {
    const store = initializePeliculaStore(preloadedState)
    return store()
}
