'use client';

import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
    const pathName = usePathname();

    return (
        <Link href={href} className={clsx(
            `${className} flex flex-row`,
            { 'bg-gray-200': pathName === href }
        )}>
            {children}
        </Link>
    )
}
