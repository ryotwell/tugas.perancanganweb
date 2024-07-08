import clsx from 'clsx'
import Link from 'next/link'

export type UnstyledLinkProps = {
    href: string
    children: React.ReactNode
    openNewTab?: boolean
    className?: string
} & React.ComponentPropsWithoutRef<'a'>

export default function UnstyledLink({
    children,
    href,
    openNewTab,
    className,
    ...rest
}: UnstyledLinkProps) {
    const isNewTab =
        openNewTab !== undefined
            ? openNewTab
            : href && !href.startsWith('/') && !href.startsWith('#')

    if (!isNewTab) {
        return (
            <Link {...rest} href={href} className={className}>
                {children}
            </Link>
        )
    }

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            {...rest}
            className={clsx(className, 'cursor-newtab')}
        >
            {children}
        </a>
    )
}
