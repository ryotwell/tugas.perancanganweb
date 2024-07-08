import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import UnstyledLink from '@/components/UnstyledLink'
import { FiMail } from 'react-icons/fi'

const links = [
    {
        label: 'Design',
        url: '/design',
    },
    {
        label: 'Statistics',
        url: '#!',
    },
    {
        label: 'Guestbook',
        url: '/guestbook',
    },
    {
        label: 'RSS',
        url: '/rss',
    },
]

const socials = [
    {
        icon: FiMail,
        url: 'mailto:ryotwell@icloud.com',
    },
    {
        icon: SiGithub,
        url: 'https://github.com/ryotwell',
    },
    {
        icon: SiLinkedin,
        url: '#!',
    },
    {
        icon: SiTwitter,
        url: 'https://twitter.com/ryotwell',
    },
]

const Footer = () => {
    return (
        <>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-3/6 mx-auto mt-10" />

            <div className="py-10">
                <div className="flex justify-center items-center space-x-4 mb-8">
                    {links.map((x, key) => {
                        return (
                            <UnstyledLink
                                key={key}
                                href={x.url}
                                className="text-base font-medium"
                            >
                                {x.label}
                            </UnstyledLink>
                        )
                    })}
                </div>
                <div className="flex justify-center items-center mb-8">
                    <div>
                        <div className="mb-4 text-center text-base">
                            Reach me out
                        </div>
                        <div className="flex justify-center space-x-6">
                            {socials.map((x, key) => {
                                return (
                                    <UnstyledLink
                                        key={key}
                                        href={x.url}
                                        className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary"
                                    >
                                        <x.icon className="my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary" />
                                    </UnstyledLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-base">
                    © Zulzario Zaeri {new Date().getFullYear()}
                </div>
            </div>
        </>
    )
}

export default Footer
