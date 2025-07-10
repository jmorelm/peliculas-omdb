import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from '@/domain/enums/HttpStatusCode';
import { buscarPeliculas } from '@/domain/usecases/buscarPeliculas';
import { OmdbRepository } from 'data/repository/OmdbRepository';

const TIPOS_BUSQUEDA_VALIDOS = ['movie', 'series'] as const
type TipoBusquedaValido = typeof TIPOS_BUSQUEDA_VALIDOS[number]

const repo = new OmdbRepository()

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const tituloPelicula = searchParams.get('title')?.trim() ?? '';
    const tipo = searchParams.get('type')?.trim();
    const pagina = searchParams.get('page') ?? '1';

    if (!tituloPelicula) {
        return NextResponse.json(
            { error: 'El parámetro title es obligatorio.' },
            { status: HttpStatusCode.BadRequest }
        )
    }

    let tipoBusqueda: TipoBusquedaValido | undefined;

    if (tipo) {
        if (TIPOS_BUSQUEDA_VALIDOS.includes(tipo as TipoBusquedaValido)) {
            tipoBusqueda = tipo as TipoBusquedaValido
        } else {
            return NextResponse.json(
                { error: `El parametro type debe estar incluido en uno de los sgtes: ${TIPOS_BUSQUEDA_VALIDOS.join(', ')}.` },
                { status: HttpStatusCode.BadRequest }
            )
        }
    }

    try {
        const response = await buscarPeliculas(repo, tituloPelicula, tipoBusqueda, parseInt(pagina))

        if (response.Response === 'False') {
            const errorMsg = response.Error ?? 'No se encontraron resultados.'
            const statusCode = errorMsg.includes('Movie not found') ? HttpStatusCode.NotFound : HttpStatusCode.BadRequest
            return NextResponse.json(
                { error: errorMsg },
                { status: statusCode }
            )
        }

        return NextResponse.json(
            { resultados: response },
            { status: HttpStatusCode.OK }
        )
    } catch (err: unknown) {
        console.error('Ocurrio un error en el servicio de busqueda:', err)
        return NextResponse.json(
            { error: 'Error interno del servidor.' },
            { status: HttpStatusCode.ServerError }
        )
    }
}