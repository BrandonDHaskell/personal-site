import React from 'react';

interface ExperienceItemProps {
    jobTitle: string;
    startStop: string;
    description: string[];
}


const ExperienceItem: React.FC<ExperienceItemProps> = ({ jobTitle, startStop, description }) => {
    return (
        <div className="experience-item">
            <div className="timeline-card">
                <div className="job-info flex items-center justify-left px-10">
                    <div className=" text-lg mb-2 font-bold md:text-lg lg:text-xl dark:text-sky-500 pr-4">{jobTitle}</div>
                    <div className="start-stop mb-2 text-lg md:text-lg lg:text-xl italic dark:text-sky-500">{startStop}</div>
                </div>
                <div className="job-desc pb-6">
                    {description.map((desc, index) => (
                        <p key={index} className="text-left text-sky-600 px-10 py-2">{desc}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;