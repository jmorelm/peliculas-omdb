'use client'

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function ErrorDetalle({ reset }: Readonly<ErrorProps>) {
    return (
        <div className="p-4 text-red-600 text-center">
            <p>No pudimos cargar la información de la película.</p>
            <button onClick={reset} className="mt-2 underline hover:text-red-800">
                Reintentar
            </button>
        </div>
    )
}