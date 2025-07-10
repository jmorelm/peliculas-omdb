'use client';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr'

export const SWRProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <SWRConfig value={{
            fetcher: (recurso: string) =>
                fetch(recurso).then(res => {
                    if (!res.ok) throw new Error('Error en la petición')
                    return res.json()
                })
        }}>
            {children}
        </SWRConfig>
    )
};