import FavoritosCliente from "./FavoritosCliente";

export default function FavoritosPage () {
    return (
        <main className="space-y-6 p-2">
            <h1 className="sr-only">Mis favoritos</h1>
            <FavoritosCliente />
        </main>
    )
}