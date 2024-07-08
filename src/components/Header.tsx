import { NavType } from '@/types/Layout'
import Link from 'next/link'

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
    return (
        <>
            <div className="h-2 bg-gradient-to-r from-blue-400 via-pink-300 to-blue-800 z-40 fixed top-0 w-full" />

            <div className="content flex justify-between fixed top-2 bg-white/50 w-full z-40 backdrop-blur-xl">
                <ul className="flex space-x-4">
                    {navs.map((x, key) => {
                        return (
                            <li key={key}>
                                <Link
                                    href={x.path}
                                    className="hover:text-primary/80 duration-300 antialiased font-medium text-slate-950/60 text-sm lg:text-base"
                                >
                                    {x.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Header
