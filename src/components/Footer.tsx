import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import UnstyledLink from '@/components/links/UnstyledLink'
import { FiMail } from 'react-icons/fi'
import { LinkType, SocialType } from '@/types/links'

const links: LinkType[] = [
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

const socials: SocialType[] = [
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
            <hr className="mx-auto mt-10 h-px w-full border-0 bg-gray-200 dark:bg-gray-700 lg:w-3/6" />

            <div id="footer" className="py-10">
                <div className="mb-8 flex items-center justify-center space-x-4">
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
                <div className="mb-8 flex items-center justify-center">
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
                <div className="flex items-center justify-center text-base">
                    © Zulzario Zaeri {new Date().getFullYear()}
                </div>
            </div>
        </>
    )
}

export default Footer
