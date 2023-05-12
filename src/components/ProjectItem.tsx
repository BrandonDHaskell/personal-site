import React from 'react';

interface ProjectItemProps {
    name: string;
    summary: string;
    imgUrl: string;
    liveSiteUrl: string;
    sourceCodeUrl: string;
    techList: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, summary, imgUrl, liveSiteUrl, sourceCodeUrl, techList }) => {
    return (
        <div className="project-card rounded bg-rose-900/75 p-8 max-w-xs ring-2 ring-offset-2 ring-stone-900 shadow-2xl shadow-gray-400/75 hover:shadow-sky-500 m-6">
            <a href={liveSiteUrl}>
                <div className="project-info rounded">
                    <h3 className="project-title job-title">{name}</h3>
                    <p className="job-desc text-sm italic pb-5">{summary}</p>
                    <img className="rounded border-2 border-stone-900" src={imgUrl} alt={name}></img>
                    <div className="flex flex-wrap justify-center py-1">
                        {techList.map((tech, index) => (
                            <div><span className="box-decoration-clone bg-gradient-to-r from-yellow-600 to-sky-200 text-sky-700 px-2 mx-2 rounded-lg">{tech}</span></div>
                        ))}
                    </div>
                </div>
            </a>
            <div className="flex justify-center text-sky-400 py-3">
                <a href={sourceCodeUrl}>Source code</a>
            </div>
        </div>
    );
}

export default ProjectItem;