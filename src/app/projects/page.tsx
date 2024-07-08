'use client'

import ProjectCard, { projects } from '@/components/ProjectCard'
import WithAnimation from '@/components/WithAnimation'

const AllProjects = () => {
    return (
        <WithAnimation>
            <div className="content mt-36">
                <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="mb-6">
                        <h1 className="font-bold text-4xl text-primary">Projects</h1>
                        <p>Showcase of my works on full-stack web developer.</p>
                    </div>
                    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
