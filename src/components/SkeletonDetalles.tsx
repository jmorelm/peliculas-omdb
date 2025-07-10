const SkeletonDetalles = () => (
    <div
        className="animate-pulse relative max-w-4xl mx-auto border border-stone-600 shadow rounded p-4 mt-4 bg-neutral-900"
        style={{ boxShadow: '0 4px 18px rgba(0, 0, 0, 0.25)' }}
    >
        <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-neutral-800 rounded w-full md:w-1/3 h-64" />
            <div className="flex-1 space-y-4 py-1">
                <div className="h-8 bg-neutral-800 rounded w-3/4" />
                <div className="h-4 bg-neutral-800 rounded w-1/4" />

                <div className="space-y-2">
                    <div className="h-4 bg-neutral-800 rounded w-1/2" />
                    <div className="h-4 bg-neutral-800 rounded w-2/3" />
                    <div className="h-4 bg-neutral-800 rounded w-5/6" />
                </div>
                
                <div className="space-y-2 pt-2">
                    <div className="h-4 bg-neutral-800 rounded w-full" />
                    <div className="h-4 bg-neutral-800 rounded w-full" />
                    <div className="h-4 bg-neutral-800 rounded w-5/6" />
                </div>
            </div>
        </div>
        <div className="text-right mt-4">
            <div className="inline-block h-8 bg-neutral-800 rounded w-32" />
        </div>
    </div>
)

export default SkeletonDetalles;