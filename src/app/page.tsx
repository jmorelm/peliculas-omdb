import PeliculasCliente from "./PeliculasCliente"

export const metadata = {
  title: 'OMDB Explorer',
  description: 'Buscador de películas y series con Clean Architecture',
}

export default function Page() {
  return (
    <main className="space-y-6 p-2">
      <h1 className="sr-only">Explorar peliculas y series</h1>
      <PeliculasCliente />
    </main>
  )
}