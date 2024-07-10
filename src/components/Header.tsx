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
            <div className="fixed top-0 z-40 h-2 w-full bg-gradient-to-tr from-primary-200 via-primary-300 to-primary-400" />

            <div className="content fixed top-2 z-40 flex w-full justify-between bg-white backdrop-blur-xl dark:bg-background">
                <ul className="flex space-x-4">
                    {navs.map((x, key) => {
                        return (
                            <li key={key}>
                                <Link
                                    href={x.path}
                                    className="text-sm font-medium antialiased lg:text-base"
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
