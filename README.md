# Películas OMDB

Buscador de Películas y Series. Aquí podrás buscar tus títulos preferidos, filtrarlos, ver detalles y hasta guardarlos como favoritos. Está hecha con Next.js, TypeScript, SWR y Tailwind.

<h3 align="center">Búsqueda en tiempo real de títulos (películas y series)</h3>

<img width="904" height="466" alt="Buscar peliculas o series por titulo" src="https://github.com/user-attachments/assets/1fd0f092-3cf0-4c7e-a369-ea2ec9d65585" />

<h3 align="center">Filtra por películas, series o todos.</h3>

*Selecciona ‘Películas’, ‘Series’ o ‘Todos’ para refinar tu búsqueda.*
<img width="905" height="466" alt="Busqueda con filtro por series" src="https://github.com/user-attachments/assets/6092bcf2-bafa-4a4b-88a6-c8ad6e5cf8e4" />

<img width="904" height="467" alt="Busqueda con filtro por peliculas" src="https://github.com/user-attachments/assets/c98a3552-7c20-4a59-88ea-598b70362d8e" />

<h3 align="center">Agrega a tus favoritos.</h3>

*Haz click a los corazones para agregar los titulos a tus favoritos*
<img width="906" height="466" alt="Seleccionar corazones para añadir a favoritos" src="https://github.com/user-attachments/assets/16a19f2a-787f-453e-a37a-c44be9695ba9" />

*Puedes revisar que peliculas o series haz añadido a tus favoritos y filtrarlos*
<img width="905" height="466" alt="Pagina de favoritos" src="https://github.com/user-attachments/assets/0a3e18a7-c0b8-4480-a3f9-beb35173614c" />

<h3 align="center">Obten detalles de los títulos de tu interés</h3>

*Haz click en un título para ver sinopsis y reparto*
<img width="905" height="466" alt="Observar detalles del titulo" src="https://github.com/user-attachments/assets/d70031c9-42df-4c75-be12-c7df84a63770" />

## Instrucciones

1. **Clona este repo**
   ```bash
   git clone https://github.com/tu-usuario/peliculas.git
   cd peliculas
   ```

2. **Variables de entorno**
   Crea un archivo `.env.local` en la raíz y agrega la clave de OMDB y la URL base:
   ```
   OMDB_API_KEY=TU_API_KEY_DE_OMDB
   BASE_URL=http://www.omdbapi.com
   ```

3. **Instala dependencias**
   ```bash
   npm install
   # o
   yarn
   # o
   pnpm install
   ```

4. **Modo desarrollo**
   ```bash
   npm run dev
   ```
   Luego se debe abrir la ruta [http://localhost:3000](http://localhost:3000) en el navegador.

## Prerrequisitos
- Node.js ≥ 16  
- npm / yarn / pnpm

---

## Scripts de utilidad

- `npm run dev`
  Iniciar la app en modo desarrollo.
- `npm run build`
  Para generar el build de producción.
- `npm start`
  Levanta el build en modo de producción.
- `npm run lint`
  Revisa el código con ESLint.

---

## Stack principal

- Next.js v15 + TypeScript
- SWR para data fetching
- Tailwind CSS para estilos
- Zustand para estado global
- React Hook Form para formularios
- Sonner para notificaciones (toasts)
- Axios con interceptor para hablar con OMDB
- Zod para validación y esquemas

---
