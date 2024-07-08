import * as React from 'react'
import { IconType } from 'react-icons'

export type ProjectType = {
    name: string,
    tech_stack: string,
    description: string,
    thumbnail: string,
}

export type StacksProps = {
    tech_stack: string
    icon_size?: number
}

export type ProjectsProps = {
    icon_size?: number
} & ProjectType & React.HTMLAttributes<HTMLDivElement>

export type IconMap = {
    [key: string]: {
        icon: IconType
        name: string
    }
}
