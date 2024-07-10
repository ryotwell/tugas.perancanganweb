'use client'

import { NavType } from '@/types/layout'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'

const navs: NavType[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Projects',
        path: '/projects',
    },
]

function Header() {
    const baseRoute = usePathname()

    return (
        <>
            {/* <div className="h-2 bg-gradient-to-r from-blue-400 via-pink-300 to-blue-800 z-40 fixed top-0 w-full" /> */}
            <div className="h-2 bg-gradient-to-tr from-primary-200 via-primary-300 to-primary-400 z-40 fixed top-0 w-full" />

            <div className="content flex justify-between fixed top-2 w-full z-40 backdrop-blur-xl bg-white dark:bg-background">
                <ul className="flex space-x-4">
                    {navs.map((x, key) => {
                        return (
                            <li key={key}>
                                <Link
                                    href={x.path}
                                    className="antialiased font-medium text-sm lg:text-base"
                                >
                                    <span
                                        className={clsx(
                                            'transition-colors',
                                            'bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0',
                                            x.path === baseRoute &&
                                                '!bg-primary-300/50 dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent',
                                        )}
                                    >
                                        {x.name}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <ModeToggle />
            </div>
        </>
    )
}

export default Header
