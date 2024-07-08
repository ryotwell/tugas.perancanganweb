import * as React from 'react'
import clsx from 'clsx'
import { BoxProps } from '@/types/box'

const BoxIcon: React.FC<BoxProps> = ({ className }) => {
    return (
        <>
            <svg
                className={clsx(['text-primary', className])}
                width={46}
                height={53}
                viewBox="0 0 46 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404"
                    stroke="currentColor"
                    strokeWidth="1.435"
                    strokeLinejoin="bevel"
                />
                <path
                    d="m45.202 39.105-22.1 12.702L1 39.105"
                    stroke="currentColor"
                    strokeWidth="1.435"
                    strokeLinejoin="bevel"
                />
                <path
                    transform="matrix(.86698 .49834 .00003 1 1 13.699)"
                    stroke="currentColor"
                    strokeWidth="1.435"
                    strokeLinejoin="bevel"
                    d="M0 0h25.491v25.405H0z"
                />
                <path
                    transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)"
                    stroke="currentColor"
                    strokeWidth="1.435"
                    strokeLinejoin="bevel"
                    d="M0 0h25.491v25.405H0z"
                />
                <path
                    transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)"
                    stroke="currentColor"
                    strokeWidth="1.435"
                    strokeLinejoin="bevel"
                    d="M0 0h25.491v25.491H0z"
                />
            </svg>
        </>
    )
}

export default BoxIcon
