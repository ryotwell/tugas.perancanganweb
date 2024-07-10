'use client'

import ProjectCard, { projects } from '@/components/ProjectCard'
import WithAnimation from '@/components/WithAnimation'

const AllProjects = () => {
    return (
        <WithAnimation>
            <div className="content mt-36">
                <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold text-primary">
                            Projects
                        </h1>
                        <p className="text-slate-950/70 antialiased dark:text-slate-100/70">
                            Showcase of my works on full-stack web developer.
                        </p>
                    </div>
                    <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {projects.map((x, key) => {
                            return (
                                <li key={key}>
                                    <ProjectCard {...x} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </WithAnimation>
    )
}

export default AllProjects
