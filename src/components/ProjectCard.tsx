import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import * as React from 'react'
import { CardLinkProps, ProjectsProps, ProjectType } from '@/types/project'
import Stacks from './Stacks'
import clsx from 'clsx'
import UnstyledLink from './links/UnstyledLink'

export const projects: ProjectType[] = [
    {
        name: 'Sistem Monitoring Suhu, Udara dan Gas',
        tech_stack: 'Laravel,Expressjs,Nextjs,Tailwindcss',
        description:
            'Monitoring suhu, kelembapan, dan gas untuk memantau kondisi lingkungan secara real-time',
        thumbnail:
            'https://res.cloudinary.com/ryotwell/image/upload/q_auto,f_auto/ryotwell/projects/sistem-monitoring-suhu-kelembapan-dan-gas-optimalisasi-lingkungan/npomi2ojunv6zkrqynzk',
        url: 'https://app.ryodev.my.id/',
        repo: 'https://github.com/ryotwell/iot.app',
    },
    {
        name: 'Zedev, Whatsapp and Telegram Bot',
        tech_stack: 'Laravel,Expressjs,Nextjs,Tailwindcss',
        description:
            'Zedev adalah layanan untuk membuat Bot Telegram dan Whatsapp.',
        thumbnail:
            'https://res.cloudinary.com/ryotwell/image/upload/q_auto,f_auto/ryotwell/projects/pte7vjdjzt9cepdank7f',
        repo: 'https://github.com/ryotwell/zedev',
        url: '',
    },
]

export const CardLink: React.FC<CardLinkProps> = ({ children, url }) => {
    return (
        <UnstyledLink href={url as string} openNewTab={true}>
            {children}
        </UnstyledLink>
    )
}

const ProjectCard: React.FC<ProjectsProps> = ({
    name,
    tech_stack,
    description,
    thumbnail,
    icon_size = 25,
    className,
    url,
    ...props
}) => {
    return (
        <CardLink url={url as string}>
            <Card
                className={clsx([
                    'border-none bg-white shadow-md duration-300 hover:scale-105 dark:bg-background dark:shadow-slate-800',
                    className,
                ])}
                {...props}
            >
                <img className="h-48 w-full rounded-t-lg" src={thumbnail} />
                <CardHeader>
                    <CardTitle className="text-xl">{name}</CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                    <div className="mb-6 flex space-x-4">
                        <Stacks tech_stack={tech_stack} icon_size={icon_size} />
                    </div>
                    <p className="text-slate-950/70 antialiased dark:text-slate-100/70">
                        {description}
                    </p>
                </CardContent>
            </Card>
        </CardLink>
    )
}

export default ProjectCard
