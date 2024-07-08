import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { ProjectsProps } from '@/types/project'
import Stacks from './Stacks'
import clsx from 'clsx'

export const projects: ProjectsProps[] = [
    {
        name: 'Sistem Monitoring Suhu, Udara dan Gas',
        tech_stack: 'Laravel,Expressjs,Nextjs,Tailwindcss',
        description:
            'Monitoring suhu, kelembapan, dan gas untuk memantau kondisi lingkungan secara real-time',
        thumbnail:
            'https://res.cloudinary.com/ryotwell/image/upload/q_auto,f_auto/ryotwell/projects/sistem-monitoring-suhu-kelembapan-dan-gas-optimalisasi-lingkungan/npomi2ojunv6zkrqynzk',
    },
    {
        name: 'Zedev, Whatsapp and Telegram Bot',
        tech_stack: 'Laravel,Expressjs,Nextjs,Tailwindcss',
        description:
            'Zedev adalah layanan untuk membuat Bot Telegram dan Whatsapp.',
        thumbnail:
            'https://res.cloudinary.com/ryotwell/image/upload/q_auto,f_auto/ryotwell/projects/pte7vjdjzt9cepdank7f',
    },
]

const ProjectCard: React.FC<ProjectsProps> = ({
    name,
    tech_stack,
    description,
    thumbnail,
    icon_size = 25,
    className,
    ...props
}) => {
    return (
        <Card
            className={clsx([
                'bg-white border-none shadow-md hover:scale-105 duration-300',
                className,
            ])}
            {...props}
        >
            <img className="rounded-t-lg h-48 w-full" src={thumbnail} />
            <CardHeader>
                <CardTitle className="text-xl">{name}</CardTitle>
            </CardHeader>
            <CardContent className="text-base">
                <div className="mb-6 flex space-x-4">
                    <Stacks tech_stack={tech_stack} icon_size={icon_size} />
                </div>
                <p>{description}</p>
            </CardContent>
        </Card>
    )
}

export default ProjectCard
