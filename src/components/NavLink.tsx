'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
    href: string
    children: ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const pathname = usePathname();
    const estaActivo = pathname === href;

    return (
        <Link
            href={ href }
            className={ [
                'font-medium transition',
                estaActivo
                    ? 'text-orange-300 underline'
                    : 'text-gray-400 hover:text-white'
            ].join(' ') }
            aria-current={ estaActivo ? 'page' : undefined }
        >
            { children }
        </Link>
    )
}

export default NavLink;