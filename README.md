# Películas OMDB

Buscador de Películas y Series. Aqui vas a poder buscar tus títulos preferidos, filtrarlos, ver detalles y hasta guardarlos como favoritos. Está hecha con Next.js, TypeScript, SWR y Tailwind.

1. **Clona este repo**
   ```bash
   git clone https://github.com/tu-usuario/peliculas.git
   cd peliculas
   ```

2. **Instala dependencias**
   ```bash
   npm install
   # o
   yarn
   # o
   pnpm install
   ```

3. **Modo desarrollo**
   ```bash
   npm run dev
   ```
   Luego se debe abrir la ruta [http://localhost:3000](http://localhost:3000) en el navegador.

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