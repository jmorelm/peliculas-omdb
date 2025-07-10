export function construirUrl (pathname: string, params: Record<string, string | number | undefined>): string {
    const search = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && String(value) !== '') {
            search.set(key, String(value))
        }
    })

    const query = search.toString()
    return query ? `${pathname}?${query}` : pathname
}