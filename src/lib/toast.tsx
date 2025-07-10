'use client'

import { Toaster, toast as _toast } from 'sonner'

export type ToastOptions = Parameters<typeof _toast>[1]

export function ToastProvider() {
    return (
        <Toaster
            position="top-right"
            richColors
            toastOptions={{
                duration: 4000
            }}
        />
    )
}

export const toast = (message: string, opts?: ToastOptions) => {
    return _toast(message, opts)
}

export const toastSuccess = (message: string, opts?: ToastOptions) => {
    return _toast.success(message, opts)
}

export const toastError = (message: string, opts?: ToastOptions) => {
    return _toast.error(message, opts)
}

export const toastInfo = (message: string, opts?: ToastOptions) => {
    return _toast(message, opts)
}

export const toastWarning = (message: string, opts?: ToastOptions) => {
    return _toast.warning(message, opts)
}

export function toastPromise<T>(
    promesa: Promise<T>,
    mensajes: {
        cargando: string
        error: string
    }
) {
    return _toast.promise(promesa, {
        loading: mensajes.cargando,
        error: mensajes.error,
    })
}