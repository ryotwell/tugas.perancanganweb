'use client'

import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface WithAnimationProps {
    children: React.ReactNode
}

const WithAnimation: React.FC<WithAnimationProps> = ({ children }) => {
    React.useEffect(() => {
        AOS.init({
            delay: 300,
        })
    }, [])

    return <>{children}</>
}

export default WithAnimation
