import React from 'react';
import ProjectsList from '../components/ProjectsList';

const Projects: React.FC = () => {
    return (
        <section className="projects">
            < h2 className="mb-8 mt-8 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-sky-500" > Projects</h2 >
            <ProjectsList />
        </section>
    );
};

export default Projects;