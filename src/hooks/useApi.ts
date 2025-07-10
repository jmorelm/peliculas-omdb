import { toastPromise } from 'lib/toast';
import useSWR from 'swr';

export interface UseApiOptions {
    mensajes?: {
        cargando: string
        error: string
    }
}

async function fetcher<R> (url: string): Promise<R> {
    const res = await fetch(url)
    if (!res.ok) throw new Error(res.statusText)
    return res.json() as Promise<R>
}

export function useApi<R> (url: string | null, options?: UseApiOptions) {
    const fetcherConfig = options?.mensajes
        ? (u: string) => {
            const prom = fetcher<R>(u)
            return toastPromise(prom, {
                cargando: options.mensajes!.cargando,
                error: options.mensajes!.error,
            }).unwrap()
        }
        : fetcher<R>;

    const { data, error, isValidating: loading } = useSWR<R>(url, fetcherConfig,
        {
            revalidateOnFocus: false,
            errorRetryCount: 0
        });

    return { data, loading, error }
}