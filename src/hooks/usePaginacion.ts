import { useMemo } from 'react'

const usePaginacion = (
    actual: number,
    total: number,
    delta = 2
): (number | '...')[] => {
    return useMemo(() => {
        const pages: (number | '...')[] = [1]
        for (let i = actual - delta; i <= actual + delta; i++) {
            if (i > 1 && i < total) pages.push(i)
        }
        if (total > 1) pages.push(total)

        return Array.from(new Set(pages))
            .sort((a, b) =>
                a === '...' || b === '...' ? (typeof a === 'number' ? -1 : 1) : a - b
            )
            .reduce<(number | '...')[]>((acc, curr, idx, arr) => {
                if (
                    idx > 0 &&
                    typeof curr === 'number' &&
                    typeof arr[idx - 1] === 'number' &&
                    curr - (arr[idx - 1] as number) > 1
                ) {
                    acc.push('...')
                }
                acc.push(curr)
                return acc
            }, [])
    }, [actual, total, delta])
}

export default usePaginacion;