'use client'

import clsx from 'clsx'
import { IoArrowDownOutline } from 'react-icons/io5'
import { SiGithub, SiTwitter } from 'react-icons/si'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import TC from '@/components/TC'
import WithAnimation from '@/components/WithAnimation'
import ProjectCard, { projects } from '@/components/ProjectCard'
import CustomLink from '@/components/links/CustomLink'
import UnstyledLink from '@/components/links/UnstyledLink'

import { ProjectType } from '@/types/project'
import { Spotlight } from '@/components/Spotlight'

const Home = () => {
    return (
        <WithAnimation>
            <HeroComponent />

            <UnstyledLink
                href="#intro"
                className={clsx(
                    'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
                    'cursor-pointer rounded-md transition-colors',
                    'hover:text-primary focus-visible:text-primary',
                )}
            >
                <IoArrowDownOutline className="h-8 w-8 animate-bounce md:h-10 md:w-10" />
            </UnstyledLink>

            <div
                id="intro"
                data-aos="fade-up"
                className="content relative mt-56 lg:mt-0 lg:flex lg:justify-center"
            >
                <div className="mb-10 w-full lg:mb-0 lg:w-1/2">
                    <h1 className="mb-6 max-w-md text-4xl font-bold lg:text-6xl">
                        Rebuild your mental model
                    </h1>
                    <p className="text-slate-950/70 antialiased dark:text-slate-100/70">
                        {`Mental model will make front-end development more
                        predictable by seeing how they work fundamentally. In my
                        blog, I'm sharing how I approach something and how my
                        mental model affect my learning about a certain topic.`}
                    </p>
                </div>
                <div className="flex w-full justify-center lg:w-1/2">
                    <ProjectsIntroComponent />
                </div>
            </div>
            <div id="projects" data-aos="fade-up" className="content mt-10">
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-primary">
                        Projects
                    </h1>
                    <p className="text-slate-950/70 antialiased dark:text-slate-100/70">{`Some projects that I'm proud of`}</p>
                </div>
                <ul className="mb-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {projects.map((x, key) => {
                        return (
                            <li key={key}>
                                <ProjectCard {...x} icon_size={20} />
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <Button asChild>
                        <Link href="/projects">See more projects</Link>
                    </Button>
                </div>
            </div>
        </WithAnimation>
    )
}

const HeroComponent = () => {
    return (
        <>
            <div className="lg:flex lg:h-screen lg:items-center">
                <div className="content relative w-full lg:h-1/2">
                    <div className="relative z-10">
                        <h1
                            className="text-2xl font-bold lg:text-5xl"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Hi!
                        </h1>
                        <h1
                            className="mb-4 text-3xl font-bold lg:text-6xl"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            You can call me Ryo
                        </h1>
                        <div
                            className="mb-6"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <span className="leading-relaxed text-slate-950/70 dark:text-slate-100/70">
                                Full-stack Web Developer
                            </span>
                        </div>
                        <p
                            className="mb-6 max-w-4xl text-slate-950/70 antialiased dark:text-slate-100/70"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            I work with React Ecosystem, and write to teach
                            people how to rebuild and redefine fundamental
                            concepts through mental models.
                        </p>
                        <p
                            className="mb-6 max-w-4xl text-slate-950/70 antialiased dark:text-slate-100/70"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            {`Don't forget to follow My`}{' '}
                            <CustomLink href="#footer">Twitter</CustomLink>!
                        </p>
                        <div className="space-x-4">
                            <Button
                                asChild
                                className="mb-6"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <a href="#projects">Projects</a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="mb-6"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <Link href="/about">Learn More About Me</Link>
                            </Button>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="800"
                            className="space-x-4"
                        >
                            <UnstyledLink
                                href={'https://twitter.com/ryotwell'}
                                className={clsx(
                                    'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                                    'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                                    'focus:outline-none focus-visible:ring',
                                    'transition-colors',
                                )}
                            >
                                <SiTwitter className="shrink-0 transition-colors group-hover:text-[#1da1f2]" />
                                <span>{`@ryotwell`}</span>
                            </UnstyledLink>
                            <UnstyledLink
                                href={'https://github.com/ryotwell'}
                                className={clsx(
                                    'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                                    'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                                    'focus:outline-none focus-visible:ring',
                                    'transition-colors',
                                )}
                            >
                                <SiGithub className="shrink-0" />
                                <span>{'ryotwell'}</span>
                            </UnstyledLink>
                        </div>
                    </div>
                </div>
                <Spotlight className="absolute top-0 z-50 hidden dark:block" />
                <TC
                    className={clsx(
                        'absolute bottom-0 right-6',
                        'translate-y-[37%] transform-gpu',
                        'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
                        'z-[-1] opacity-70 dark:opacity-30',
                    )}
                />
            </div>
        </>
    )
}

export const ProjectsIntroComponent = () => {
    const projectIntroOne: ProjectType = { ...projects[0] }
    const projectIntroTwo: ProjectType = { ...projects[1] }

    return (
        <>
            <Card
                className={clsx([
                    'h-96 w-80 border-none bg-white shadow-md dark:bg-background dark:shadow-slate-800',
                    'z-10',
                    'duration-300 hover:scale-105',
                ])}
            >
                <img
                    className="h-1/2 w-full rounded-t-lg"
                    src={projectIntroOne.thumbnail}
                />
                <CardHeader>
                    <CardTitle className="text-lg">
                        {projectIntroOne.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <p>{projectIntroOne.description}</p>
                </CardContent>
            </Card>
            <Card
                className={clsx([
                    'h-96 w-80 border-none bg-white shadow-md dark:bg-background dark:shadow-slate-800',
                    'absolute rotate-6 lg:-translate-y-8 lg:translate-x-10 lg:rotate-12',
                    'duration-300 hover:scale-105',
                ])}
            >
                <img
                    className="h-1/2 w-full rounded-t-lg"
                    src={projectIntroTwo.thumbnail}
                />
                <CardHeader>
                    <CardTitle className="text-lg">
                        {projectIntroTwo.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <p className="text-slate-950/70 antialiased dark:text-slate-100/70">
                        {projectIntroTwo.description}
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default Home
