import { useState, useEffect, RefObject } from 'react';

const useVerificarOverflow = (
    ref: RefObject<HTMLHeadingElement | null>
): boolean => {
    const [estaDesbordado, setEstaDesbordado] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const medir = () => {
            setEstaDesbordado(el.scrollWidth > el.clientWidth)
        }

        medir()
        window.addEventListener('resize', medir)
        return () => window.removeEventListener('resize', medir)
    }, [ref])

    return estaDesbordado;
}

export default useVerificarOverflow;