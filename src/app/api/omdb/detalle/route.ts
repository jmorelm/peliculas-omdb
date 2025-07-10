import { obtenerDetalle } from '@/domain/usecases/obtenerDetallePelicula';
import { OmdbRepository } from 'data/repository/OmdbRepository';
import { NextRequest, NextResponse } from 'next/server';

const repo = new OmdbRepository();

export async function GET (request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')?.trim() ?? ''

    if (!id) {
        return NextResponse.json(
            { error: 'El parámetro "id" es obligatorio.' },
            { status: 400 }
        )
    }

    try {
        const response = await obtenerDetalle(repo, id);

        if (response.Response === 'False') {
            const errorMsg = response.Error ?? 'No se encontro el detalle de la pelicula.'
            const statusCode = errorMsg.includes('Incorrect IMDb ID.') ? 404 : 400
            return NextResponse.json(
                { error: errorMsg },
                { status: statusCode }
            )
        }

        return NextResponse.json(
            { detalle: response },
            { status: 200 }
        )
    } catch (err: unknown) {
        console.error('Ocurrio un error al obtener el detalle de la pelicula', err)
        return NextResponse.json(
            { error: 'Error interno del servidor.' },
            { status: 500 }
        )
    }
}
