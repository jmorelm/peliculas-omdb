import { usePeliculaStore } from '@/store/usePeliculaStore'
import { toast, toastSuccess } from 'lib/toast'
import { Pelicula } from '@/types/omdb'

const useFavorito = (movie: Pelicula) => {
    const { favoritos, toggleFavorito } = usePeliculaStore()
    const isFavorito = Boolean(favoritos[movie.imdbID])

    const onToggle = () => {
        toggleFavorito(movie)
        if (isFavorito) {
            toast('Eliminado de favoritos')
        } else {
            toastSuccess('Agregado a favoritos')
        }
    }

    return { isFavorito, onToggle }
}

export default useFavorito;