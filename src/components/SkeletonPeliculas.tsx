const SkeletonPeliculas = () => (
  <div className="animate-pulse group block border border-stone-600 rounded-lg">
    <div
      className="
        overflow-hidden rounded-lg bg-neutral-800 
        h-65
      "
    />
    <div className="p-4 space-y-2">
      <div className="h-8 bg-neutral-800 rounded w-3/4" />
      <div className="h-4 bg-neutral-800 rounded w-1/2" />
    </div>
  </div>
)

export default SkeletonPeliculas;