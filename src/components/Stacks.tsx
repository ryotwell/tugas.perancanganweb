import * as React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {
    SiExpress,
    SiLaravel,
    SiNextdotjs,
    SiReact,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'
import { IconMap, StacksProps } from '@/types/project'

export const icons: IconMap = {
    Laravel: {
        icon: SiLaravel,
        name: 'Laravel',
    },
    React: {
        icon: SiReact,
        name: 'React',
    },
    Expressjs: {
        icon: SiExpress,
        name: 'Express.JS',
    },
    Nextjs: {
        icon: SiNextdotjs,
        name: 'NextJS',
    },
    Tailwindcss: {
        icon: SiTailwindcss,
        name: 'Tailwind CSS',
    },
    Typescript: {
        icon: SiTypescript,
        name: 'Typescript',
    },
    Socketio: {
        icon: SiSocketdotio,
        name: 'Socket.io',
    },
}

export const getStack = (x: string) => {
    return icons[x.trim()]
}

const Stacks: React.FC<StacksProps> = ({ tech_stack, icon_size = 25 }) => {
    const [stacks, setStacks] = React.useState<string[]>([])

    const parseStack = (tech_stack: string) => {
        const parse = tech_stack.split(',')

        return parse
    }

    React.useEffect(() => {
        const parse = parseStack(tech_stack)

        setStacks(parse)
    }, [tech_stack])

    return (
        <>
            {stacks.map((x, key) => {
                const IconComponent = getStack(x).icon
                const name = getStack(x).name

                return (
                    <TooltipProvider key={key}>
                        <Tooltip>
                            <TooltipTrigger>
                                <IconComponent
                                    size={icon_size}
                                    className="text-slate-600 hover:text-primary duration-300"
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            })}
        </>
    )
}

export default Stacks