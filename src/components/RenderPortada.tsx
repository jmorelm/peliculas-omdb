'use client'
import { AssetsPublicos } from '@/domain/enums/AssetsPublicos'
import Image, { ImageProps, StaticImageData } from 'next/image'
import { useState } from 'react'

interface RenderPortadaProps extends Omit<ImageProps, 'src' | 'placeholder'> {
    src: string
}

const RenderPortada = ({
    src: srcInicial,
    alt,
    ...rest
}: Readonly<RenderPortadaProps>) => {
    const [srcActual, setSrcActual] = useState<string | StaticImageData>(srcInicial || AssetsPublicos.PortadaNoDisponible)
    const usarFallback = srcActual === AssetsPublicos.PortadaNoDisponible

    return (
        <Image
            src={srcActual}
            alt={alt}
            onError={() => setSrcActual(AssetsPublicos.PortadaNoDisponible)}
            unoptimized={usarFallback}
            {...rest}
            style={{
                objectFit: rest.style?.objectFit ?? 'cover',
                alignSelf: 'center',
                ...rest.style,
            }}
        />
    )
}

export default RenderPortada;